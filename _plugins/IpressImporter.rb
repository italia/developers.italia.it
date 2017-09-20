#
# Custom generator for importing iPress news.
# This code runs during jekyll build step.
# Inspired by http://stackoverflow.com/questions/27828996/is-there-a-way-to-parse-external-rss-feeds-with-jekyll
#

require 'rest_client'
require 'json'

class IpressImporter < Jekyll::Generator
  safe true
  priority :high
  def generate(site)

    api_url = Jekyll.configuration({})['ipress_url']
    puts "[*] Fetching iPress API from: " + api_url

    api_res = RestClient.get api_url, {:accept => :json}

    # Parse json
    api_json = JSON.parse(api_res)

    news = api_json['elements']
    puts "Total news fetched: " + news.size.to_s

    news.size > 0 or die("No news fetched")

    news = news.sort_by { |item| Date.parse item['publishDate'] }.reverse

    # Create a new on-the-fly Jekyll collection called "ipress_feed"
    jekyll_coll = Jekyll::Collection.new(site, 'ipress_feed')
    site.collections['ipress_feed'] = jekyll_coll

    # Add fake virtual documents to the collection
    news.each do |item|

      path = "_ipress/" + item['id'].to_s
      path = site.in_source_dir(path)
      doc = Jekyll::Document.new(path, {
        site: site,
        collection: jekyll_coll
      })

      # Extract article attributes
      doc.data['ipress_title'] = item['title']
      doc.data['ipress_summary'] = item['summary']
      doc.data['ipress_link'] = item['link']
      doc.data['ipress_shortLink'] = item['shortlink']
      doc.data['ipress_publishDate'] = item['publishDate']
      doc.data['ipress_lang'] = item['lang']

      jekyll_coll.docs << doc
    end
  end
end
