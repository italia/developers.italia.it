#!/usr/bin/env ruby
# frozen_string_literal: true

require 'rest_client'
require 'json'
require 'octokit'
require 'fileutils'
require 'yaml'

# Export from these organizations
ORGS = %w[teamdigitale italia].freeze

# Project's prefixes we can translate to a user friendly string in the UI.
# See todo_projects_dict in _data/l10n.yml.
PROJECS_PREFIX = %w[spid- 18app anpr- daf- dati- pianotriennale- lg- design- security- cie-].freeze

# List of technologies shown in the UI
TECH_LIST = %w[
  angular react design html arduino bootstrap frontend
  perl python cpp scala php csharp java android ios dotnet
  wordpress metabase ansible docker magento joomla django
].sort.freeze

# Import issues with at least one of these labels
ONLY_WITH_LABEL = ['help wanted', 'Hacktoberfest'].freeze

# Show these labels in the UI, if present.
ISSUE_TYPES = ['bug', 'enhancement', 'new project', 'Hacktoberfest'].freeze

# Ignore these repos using the full_name (ie. 'organization/repo')
BLACKLISTED_REPOS = [].freeze

GITHUB_ACCESS_TOKEN = ENV.fetch('GITHUB_ACCESS_TOKEN', '')

def fetch(url, headers = {})
  rest_params = {
    'per_page' => 100,
    'page' => 1,
    'type' => 'public'
  }

  results = []
  loop do
    print "."
    response = JSON.parse(RestClient.get(url, {
      Authorization: "token #{GITHUB_ACCESS_TOKEN}", params: rest_params
    }.merge(headers)))

    if response.is_a? Array
      results += response
    else
      results = response
      break
    end
    break if response.size != rest_params['per_page']

    rest_params['page'] += 1
  end

  results
end

def fetch_teams(org)
  teams = fetch("https://api.github.com/orgs/#{org}/teams")

  teams.map do |team|
    members = fetch("#{team['url']}/members")

    team['members'] = members.map { |m| fetch(m['url']) }
    team
  end
end

def fetch_issues(repos)
  github_issues = []

  repos.each do |repo|
    open_issues, full_name = repo.values_at('open_issues_count', 'full_name')

    next if open_issues.zero? || BLACKLISTED_REPOS.include?(full_name)

    issues = fetch("https://api.github.com/repos/#{full_name}/issues")
    issues.each do |issue|
      next if issue.key?('pull_request')

      labels = issue['labels'].map { |label| label['name'] }

      # Only get the issues marked with at least one label in ONLY_WITH_LABEL
      next unless labels.any? { |item| ONLY_WITH_LABEL.include? item }

      issue_data = {
        'created_at' => issue['created_at'],
        'url' => issue['html_url'],
        'title' => issue['title'],
        'name' => repo['name'],
        'language' => TECH_LIST & repo['topics'],
        'repository_url' => repo['html_url'],
        'labels' => labels,
        'type' => (labels & ISSUE_TYPES).first || '',
        'subproject' => repo['name']
      }

      # Remove the issue label(s) marking this as help wanted, so they don't
      # get displayed in the UI.
      issue_data['labels'].reject! { |label| ONLY_WITH_LABEL.include? label }

      # Set the main project name.
      # The user facing strings are translated in _data/l10n.yml.
      prefix = PROJECS_PREFIX.find { |p| repo['name'].start_with?(p) }
      issue_data['project'] = if prefix
                                prefix.tr('-', '')
                              elsif repo['name'] =~ /.italia.it|\.gov.it|\.governo\.it/
                                'website'
                              else
                                'other'
                              end
      github_issues.push(issue_data)
    end
  end
  github_issues
end

if GITHUB_ACCESS_TOKEN.empty?
  warn '**********************************************************'
  warn 'WARNING! No GITHUB_ACCESS_TOKEN: skipping GitHub API calls'
  warn '**********************************************************'
  return
end

repos = ORGS.map do |org|
  fetch(
    "https://api.github.com/orgs/#{org}/repos", {
      accept: 'application/vnd.github.mercy-preview+json'
    }
  )
end.flatten
puts "Got #{repos.size} GitHub repos"

github_issues = fetch_issues(repos)
puts "Got #{github_issues.size} issues"

github_teams = fetch_teams('italia')
puts "Got #{github_teams.size} teams"

# Fetch org members
client = Octokit::Client.new(access_token: GITHUB_ACCESS_TOKEN)
client.auto_paginate = true

github_members = client.organization_public_members('italia').map { |m| m.to_hash.transform_keys(&:to_s) }
puts "Got #{github_members.size} members"

# We'll get this file from the frontend.
FileUtils.mkdir_p('_site/assets')
File.open('_site/assets/github_issues.json', 'w') { |f| f.write(github_issues.to_json) }

File.open('_data/github_teams.yml', 'w') { |f| f.write(github_teams.to_yaml) }
File.open('_data/github_members.yml', 'w') { |f| f.write(github_members.to_yaml) }
File.open('_data/github_tech_list.yml', 'w') { |f| f.write(TECH_LIST.to_yaml) }
