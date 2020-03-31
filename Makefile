VENDOR_DIR = assets/vendor/

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
	bundle install --path vendor/
build-swagger:
	cd swagger && npm run build
test:
	JEKYLL_NO_GITHUB=true bundle exec htmlproofer ./_site --assume-extension --check-html --allow-hash-href --empty-alt-ignore --only-4xx --disable-external --url_ignore "/esQuery\.config\.js/"
local:
	JEKYLL_NO_GITHUB=true bundle exec jekyll serve --incremental --host=0.0.0.0
jekyll-build:
	JEKYLL_ENV=production bundle exec jekyll build
deploy-vm:
	rsync --delete -avP --exclude "Makefile" --rsync-path="sudo -u www-data rsync" _site/ developers.italia.it:/apps/www/developers.italia.it/web/
include-npm-deps:
	mkdir -p $(VENDOR_DIR)
	npm install
	cp node_modules/jquery/dist/jquery.min.js $(VENDOR_DIR)
	cp -r node_modules/chart.js $(VENDOR_DIR)
	cp -r node_modules/bootstrap-italia $(VENDOR_DIR)
build: | build-bundle include-npm-deps download-data build-swagger jekyll-build
build-test: | build test
