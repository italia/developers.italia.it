.PHONY: build deploy
download-data:
	npm run get-software
	npm run get-publishers

	wget -P _data https://raw.githubusercontent.com/italia/developers.italia.it-data/main/github_members.yml
	wget -P _data https://raw.githubusercontent.com/italia/developers.italia.it-data/main/github_teams.yml
	wget -P _data https://raw.githubusercontent.com/italia/developers.italia.it-data/main/github_tech_list.yml

	# Check the github_issues.json file exists, we'll need it on the frontend once the site has build
	curl -w %{http_code} -s -o /dev/null https://raw.githubusercontent.com/italia/developers.italia.it-data/main/github_issues.json | grep 200

bundle-setup:
	gem install bundler:2.5.4

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
	bundle exec htmlproofer ./_site --allow-missing-href --ignore-missing-alt --only-4xx --no-enforce-https --disable-external

local:
	bundle config set path vendor/
	npx webpack-dev-server --config webpack.dev.js --color --progress --host 0.0.0.0 | bundle exec jekyll serve --livereload --incremental --host=0.0.0.0 --trace

jekyll-build:
	JEKYLL_ENV=production bundle exec jekyll build
	NODE_ENV=production npm run build

	@if [ -z "$${ELASTICSEARCH_PASS}" ]; then \
	    echo "Skipping Elasticsearch update: ELASTICSEARCH_PASS is not set."; \
	else \
	    curl --fail \
           -H 'Content-Type: application/json' \
	         -H "Authorization: Basic $$(printf %s:%s "elastic" "$${ELASTICSEARCH_PASS}" | base64)" \
	         --data-binary @elasticsearch.bulk \
	         -XPOST "https://elasticsearch.developers.italia.it/_bulk?pretty"; \
	fi

include-npm-deps:
	npm ci --legacy-peer-deps
build: | bundle-install-deployment include-npm-deps download-data jekyll-build
build-test: | build test
