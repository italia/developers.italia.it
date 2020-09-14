.PHONY: build deploy
download-data:
<<<<<<< HEAD
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

=======
	wget https://developers.italia.it/crawler/softwares.yml -O _data/crawler/softwares.yml
	wget https://developers.italia.it/crawler/amministrazioni.yml -O _data/crawler/amministrazioni.yml
	wget https://developers.italia.it/crawler/software_categories.yml -O _data/crawler/software_categories.yml
	wget https://developers.italia.it/crawler/software-open-source.yml -O _data/crawler/software-open-source.yml
	wget https://developers.italia.it/crawler/software-riuso.yml -O _data/crawler/software-riuso.yml
	wget https://developers.italia.it/crawler/software_scopes.yml -O _data/crawler/software_scopes.yml
	wget https://developers.italia.it/crawler/software_tags.yml -O _data/crawler/software_tags.yml
build-bundle:
	bundle install --path vendor/
>>>>>>> 25fcdaa2bacb6ece218a440b877f026d635f5292
build-swagger:
	cd swagger && npm run build
test:
	JEKYLL_NO_GITHUB=true bundle exec htmlproofer ./_site --assume-extension --check-html --allow-hash-href --empty-alt-ignore --only-4xx --disable-external --url_ignore "/esQuery\.config\.js/"
local:
<<<<<<< HEAD
	JEKYLL_NO_GITHUB=true bundle exec jekyll serve --incremental --host=0.0.0.0
=======
	JEKYLL_NO_GITHUB=true bundle exec jekyll serve --incremental
>>>>>>> 25fcdaa2bacb6ece218a440b877f026d635f5292
jekyll-build:
	JEKYLL_ENV=production bundle exec jekyll build
include-npm-deps:
	npm install
build: | build-bundle-deployment include-npm-deps download-data build-swagger jekyll-build
build-test: | build test
