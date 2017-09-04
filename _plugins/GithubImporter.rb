require 'rest_client'
require 'json'
require 'pathname'

class GithubImporter < Jekyll::Generator
	safe true
	priority :high

	def generate(site)
		feed_url = site.config['github_api_url']
		projects_prefix = site.config['github_projects_prefix']
		access_token = ENV['GITHUB_ACCESS_TOKEN']
		site_folder = site.config['github_folder']

		rest_params = {per_page: 100}
		if access_token!=nil
			rest_params['access_token'] = access_token
		end
		# obtaining all the repos of Italia Github org.
		repos_endpoint = feed_url + "/orgs/italia/repos"
		begin
			repos_response = RestClient.get repos_endpoint,{params: rest_params}
		rescue RestClient::Unauthorized, RestClient::Forbidden => err
			puts "*****************************************************"
			puts("WARNING!!! Rate-limit problem with Github API provide a valid GITHUB_ACCESS_TOKEN in ENV variables")
			puts err.response
			return
		else
			puts "GITHUB API connection OK"
		end

		repos = JSON.parse(repos_response)

		repos.size > 0 or puts("No repos fetched")
		repos.size > 0 or return

		puts "++++++++++++++ Github Repos fetched: " + repos.size.to_s

		github_issues = []
		
		# For every repos we need the issues
		repos.each do |item|

			open_issues = Integer(item['open_issues_count'])
			name = item['name']

			# if this repo as no isseus we can skip to the next
			next if open_issues == 0
			
			# obtaining all the issues for this repo
			issues_endpoint = feed_url + "/repos/italia/"+ name +"/issues"
			issues_response = RestClient.get issues_endpoint, {params: rest_params}
			issues = JSON.parse(issues_response)

			issues.each do |issue|
				issue_data = {}
				# parent's data
				issue_data[:name] = item['name']
				issue_data[:language] = item['language']
				# we've to analyze the name to obtain the projects and subproject
				if issue_data[:name].start_with?(*projects_prefix)
					issue_data[:project] = item['name'].partition('-').first
					issue_data[:subproject] = item['description']!='' ? item['description'] : item['name']
				elsif projects_prefix.include? item['name']+'-'
					issue_data[:project] = item['name']
					issue_data[:subproject] = item['description']!='' ? item['description'] : item['name']
				else
					issue_data[:project] = 'other'
					issue_data[:subproject] = item['description']!='' ? item['description'] : item['name']
				end

				# issue's data
				issue_data[:url] = issue['html_url']
				issue_data[:title] = issue['title']
				issue_data[:created_at] = issue['created_at']
				issue_data[:raw_labels] = issue['labels']
				issue_data[:labels] = []
				issue_data[:type] = ''
				issue_data[:severity] = ''
				# lets optimize labels
				if issue['labels'].any? == true
					issue['labels'].each do |label|
						if label['name'].start_with?('tipo:')
							issue_data[:type] = label['name'].partition(':').last
						elsif label['name'].start_with?('diff:')
							issue_data[:severity] = label['name'].partition(':').last
						else
							issue_data[:labels].push(label['name'])
						end
					end
				end

				github_issues.push(issue_data)
			end

		end
		puts "++++++++++++++ Github issues fetched: " + github_issues.size.to_s

		
		unless File.directory?(site_folder)
			p = Pathname.new(site_folder)
			p.mkdir
		end

		File.open(File.join(site_folder, 'issues.json'), 'w') do |f|
			f.write(github_issues.to_json)
			f.close
		end
	end
end