.PHONY: build deploy
download-data:
	wget --max-redirect 0 https://crawler.developers.italia.it/softwares.yml -O _data/crawler/softwares.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/amministrazioni.yml -O _data/crawler/amministrazioni.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/software_categories.yml -O _data/crawler/software_categories.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/software-open-source.yml -O _data/crawler/software-open-source.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/software-riuso.yml -O _data/crawler/software-riuso.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/software_scopes.yml -O _data/crawler/software_scopes.yml
	wget --max-redirect 0 https://crawler.developers.italia.it/software_tags.yml -O _data/crawler/software_tags.yml
build-bundle:
	gem install bundler
	bundle config set path vendor/
	bundle install
build-swagger:
	cd swagger && npm run build
test:
	JEKYLL_NO_GITHUB=true bundle exec htmlproofer ./_site --assume-extension --check-html --allow-hash-href --empty-alt-ignore --only-4xx --disable-external --url_ignore "/esQuery\.config\.js/"
local:
	JEKYLL_NO_GITHUB=true bundle exec jekyll serve --incremental --host=0.0.0.0
jekyll-build:
	JEKYLL_ENV=production bundle exec jekyll build
include-npm-deps:
	npm install
build: | build-bundle include-npm-deps download-data build-swagger jekyll-build
build-test: | build test
