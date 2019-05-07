require 'rest_client'
require 'json'
require 'octokit'
require 'pathname'
require 'parallel'

class GithubImporter < Jekyll::Generator
	safe true
	priority :high

	def writeJson(folder, filename, content)
		File.open(File.join(folder, filename), 'w') do |f|
			f.write(content)
			f.close
		end
	end

	def generate(site)
		# test if we don't want download data from github
		if ENV['JEKYLL_NO_GITHUB'] == "1" || ENV['JEKYLL_NO_GITHUB'] == "true"
			puts "*****************************************************"
            puts("WARNING! GitHub API disabled")
			puts "*****************************************************"
			return
		end
		if ENV['GITHUB_ACCESS_TOKEN'] == "" || ENV['GITHUB_ACCESS_TOKEN'] == nil
			puts "*****************************************************"
            puts("WARNING! No GITHUB_ACCESS_TOKEN: skipping GitHub API calls")
			puts "*****************************************************"
			return
		end

		feed_url = site.config['github_api_url']
		projects_prefix = site.config['github_projects_prefix']
		access_token = ENV['GITHUB_ACCESS_TOKEN']
		site_folder = site.config['github_folder']
		issues_types = site.config['github_issues_types']
		tech_list = site.config['github_tech_list']

		rest_params = {'per_page' => 100, 'page' => 1}
		if access_token!=nil
			rest_params['access_token'] = access_token
		end
		# obtaining all the repos of Italia Github org.
		repos_endpoint = feed_url + "/orgs/italia/repos"

		repos = []
		loop do
            begin
                repos_response = RestClient.get repos_endpoint, \
                    {params: rest_params.merge({type: 'public'}), accept: 'application/vnd.github.mercy-preview+json'}
            rescue RestClient::Unauthorized, RestClient::Forbidden => err
                puts "*****************************************************"
                puts("WARNING!!! Rate-limit problem with Github API provide a valid GITHUB_ACCESS_TOKEN in ENV variables")
                puts err.response
                return
            else
                puts "GITHUB API connection OK"
                page_repos = JSON.parse(repos_response)
                repos += page_repos
                break if page_repos.size != rest_params['per_page']
                rest_params['page'] += 1
            end
        end

		repos.size > 0 or puts("No repos fetched")
		repos.size > 0 or return

		puts "++++++++++++++ Github Repos fetched: " + repos.size.to_s

		github_issues = []

		# For every repos we need the issues
		Parallel.each(repos, in_threads: 16) { |item|

			open_issues = Integer(item['open_issues_count'])
			name = item['name']

			# if this repo as no isseus or is blacklisted
			next if open_issues == 0 or site.config['github_blacklist_repos'].include? item['name']

			# obtaining all the issues for this repo
			issues_endpoint = feed_url + "/repos/italia/"+ name +"/issues"
            rest_params['page'] = 0

            # TODO: iterate over pages
			begin
				issues_response = RestClient.get issues_endpoint,{params: rest_params}
			rescue RestClient::Unauthorized, RestClient::Forbidden => err
				puts "*****************************************************"
				puts("WARNING!!! Rate-limit problem with Github API provide a valid GITHUB_ACCESS_TOKEN in ENV variables")
				puts err.response
				return
			end

			issues = JSON.parse(issues_response)

			issues.each do |issue|
				# skip if the issues is also a PR
				next if issue.key?("pull_request")

				issue_data = {}
				# parent's data
				issue_data[:name] = item['name']
				issue_data[:language] = tech_list & item['topics']
				issue_data[:repository_url] = item['html_url']

				# labels
				issue_data[:labels] = issue['labels'].collect{ |label| label['name']}
				# for now we want only issues tagged as "help wanted"
				next if not issue_data[:labels].include?('help wanted')
				# for now, strip the "help wanted from the list"
				issue_data[:labels].delete('help wanted')

				# we've to analyze the name to obtain the projects and subproject
				if issue_data[:name].start_with?(*projects_prefix)
					issue_data[:project] = item['name'].partition('-').first
					issue_data[:subproject] = item['name']
				elsif projects_prefix.include? item['name']+'-'
					issue_data[:project] = item['name']
					issue_data[:subproject] = item['name']
				elsif issue_data[:name].match(/.italia.it|\.gov.it/).to_s!=''
					issue_data[:project] = 'website'
					issue_data[:subproject] = item['name']
				else
					issue_data[:project] = 'other'
					issue_data[:subproject] = item['name']
				end

				issue_data[:url] = issue['html_url']
				issue_data[:title] = issue['title']
				issue_data[:created_at] = issue['created_at']
				issue_data[:raw_labels] = issue['labels']
				issue_data[:type] = (issue_data[:labels] & issues_types)[0]!=nil ? (issue_data[:labels] & issues_types)[0] : ''
				issue_data[:severity] = ''

				github_issues.push(issue_data)
			end

		}
		puts "++++++++++++++ Github issues fetched: " + github_issues.size.to_s

		# FETCH TEAMS and MEMBERS
		teams_endpoint = feed_url + "/orgs/italia/teams"
		github_teams = []

		begin
			teams_response = RestClient.get teams_endpoint,{params: rest_params}
		end
		teams = JSON.parse(teams_response)

		# for every team we need the members
		# unfortunately github api doesn't expose the full name of a member
		Parallel.each(teams, in_threads: 16) { |team|

			team['members'] = []

			# for every team we ask for members
			begin
				members_endpoint = team['url'] + '/members'
				members_response = RestClient.get members_endpoint,{params: rest_params}
			end
			members = JSON.parse(members_response)

			Parallel.each(members, in_threads: 4) { |member|
				begin
					singlemember_response = RestClient.get member['url'],{params: rest_params}
				end
				team['members'].push( JSON.parse(singlemember_response) )
			}

			github_teams.push(team)

		}
		puts "++++++++++++++ Github teams fetched: " + teams.size.to_s

		# FETCH ORG MEMBERS
		client = Octokit::Client.new(:access_token => access_token)
		client.auto_paginate = true
		github_members = client.organization_public_members('italia').map {|x| x.to_hash}
		puts "++++++++++++++ Github members fetched: " + github_members.size.to_s

		# Repos&issues json must be in a specific folder cause we need a client parsing on the "cosa fare" page
		unless File.directory?(site_folder)
			p = Pathname.new(site_folder)
			p.mkdir
		end

		writeJson(site_folder, 'issues.json', github_issues.to_json)
		writeJson('_data', 'github_teams.json', github_teams.to_json)
		writeJson('_data', 'github_members.json', github_members.to_json)

		# _data/* files are read before this plugin is run, so we need to inject data manually into site.data
		site.data['github_teams'] = github_teams
		site.data['github_members'] = JSON.parse(github_members.to_json) # stringify keys (Jekyll templates do not recognize symbols)
	end
end
