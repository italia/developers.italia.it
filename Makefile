.PHONY: build deploy
download-data:
	wget --max-redirect 0 https://crawler.developers.italia.it/softwares.yml -O _data/crawler/softwares.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/amministrazioni.yml -O _data/crawler/amministrazioni.yml

	wget -P _data https://raw.githubusercontent.com/italia/developers.italia.it-data/main/github_members.yml
	wget -P _data https://raw.githubusercontent.com/italia/developers.italia.it-data/main/github_teams.yml
	wget -P _data https://raw.githubusercontent.com/italia/developers.italia.it-data/main/github_tech_list.yml

	# Check the github_issues.json file exists, we'll need it on the frontend once the site has build
	curl -w %{http_code} -s -o /dev/null https://raw.githubusercontent.com/italia/developers.italia.it-data/main/github_issues.json | grep 200

bundle-setup:
	gem install bundler:2.3.24

bundle-install: bundle-setup
	bundle config set path vendor/
	bundle install

bundle-install-deployment: bundle-setup
	bundle config set path vendor/
	bundle install --deployment

test:
	npm run lint
	npm run test
	scripts/pa11y.sh
	bundle exec htmlproofer ./_site --assume-extension --check-html --allow-hash-href --empty-alt-ignore --only-4xx --disable-external

local:
	bundle config set path vendor/
	npx webpack-dev-server --config webpack.dev.js --color --progress --host 0.0.0.0 | bundle exec jekyll serve --livereload --incremental --host=0.0.0.0 --trace

jekyll-build:
	JEKYLL_ENV=production bundle exec jekyll build
	NODE_ENV=production npm run build
include-npm-deps:
	npm ci
build: | bundle-install-deployment include-npm-deps download-data jekyll-build
build-test: | build test
