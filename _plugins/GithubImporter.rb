require 'rest_client'
require 'json'
require 'pathname'

class GithubImporter < Jekyll::Generator
	safe true
	priority :high

	def generate(site)
		feed_url = site.config['github_api_url']
		access_token = site.config['github_access_token']
		site_folder = site.config['github_folder']

		# obtaining all the repos of Italia Github org.
		repos_endpoint = feed_url + "/orgs/italia/repos"
		repos_response = RestClient.get repos_endpoint,{params:{per_page: 100, access_token: access_token}}

		repos = JSON.parse(repos_response)

		repos.size > 0 or die("No repos fetched")

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
			issues_response = RestClient.get issues_endpoint, {params:{per_page: 100, access_token: access_token}}
			issues = JSON.parse(issues_response)

			issues.each do |issue|
				issue_data = {}
				# parent's data
				issue_data[:name] = item['name']
				issue_data[:language] = item['language']
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