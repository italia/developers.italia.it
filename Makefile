.PHONY: build deploy
download-data:
	wget --max-redirect 0 https://crawler.developers.italia.it/softwares.yml -O _data/crawler/softwares.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/amministrazioni.yml -O _data/crawler/amministrazioni.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/software_categories.yml -O _data/crawler/software_categories.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/software-open-source.yml -O _data/crawler/software-open-source.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/software-riuso.yml -O _data/crawler/software-riuso.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/software_scopes.yml -O _data/crawler/software_scopes.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/software_tags.yml -O _data/crawler/software_tags.yml

bundle-setup:
	gem install bundler:2.1.4
	bundle config set path vendor/

bundle-install: bundle-setup
	bundle install

bundle-install-deployment: bundle-setup
	bundle install --deployment

# Get issues (/assets/issues.js) and contributors (_data/github_*.yml) from GitHub
github-import: bundle-install
	bundle exec scripts/github_importer.rb

build-swagger:
	cd swagger && npm run build

test:
	bundle exec htmlproofer ./_site --assume-extension --check-html --allow-hash-href --empty-alt-ignore --only-4xx --disable-external
local: build-swagger
	npx webpack-dev-server --config webpack.dev.js --color --progress -d --host 0.0.0.0 | bundle exec jekyll serve --livereload --incremental --host=0.0.0.0
jekyll-build:
	JEKYLL_ENV=production bundle exec jekyll build
	NODE_ENV=production npm run build
include-npm-deps:
	npm ci
build: | build-bundle-deployment include-npm-deps download-data build-swagger jekyll-build
build-test: | build test
