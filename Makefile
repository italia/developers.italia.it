export NOKOGIRI_USE_SYSTEM_LIBRARIES = true

setup:
# Download crawler data
	wget --max-redirect 0 https://crawler.developers.italia.it/softwares.yml -O _data/crawler/softwares.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/amministrazioni.yml -O _data/crawler/amministrazioni.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/software_categories.yml -O _data/crawler/software_categories.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/software-open-source.yml -O _data/crawler/software-open-source.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/software-riuso.yml -O _data/crawler/software-riuso.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/software_scopes.yml -O _data/crawler/software_scopes.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/software_tags.yml -O _data/crawler/software_tags.yml

# The Docker image has bundle, but Netlify uses a different
# image. Workaround that by installing it.
ifeq (,$(shell which bundle))
	gem install bundler:2.1.4
  bundle config set deployment 'true'
	bundle install
endif

# Get issues (/assets/issues.js) and contributors (_data/github_*.yml) from GitHub
	bundle exec scripts/github_importer.rb

	npm ci

local: setup
	npx webpack-dev-server --config webpack.dev.js --color --progress -d --host 0.0.0.0 | bundle exec jekyll serve --livereload --incremental --host=0.0.0.0

build: setup
	JEKYLL_ENV=production bundle exec jekyll build
	NODE_ENV=production npm run build

test: build
	# Disable searchyll indexing with Elasticsearch in tests.
	ELASTICSEARCH_URL="" bundle exec htmlproofer ./_site --assume-extension --check-html --allow-hash-href --empty-alt-ignore --only-4xx --disable-external

.PHONY: setup local build test
