VENDOR_DIR = assets/vendor/

.PHONY: build deploy
download-data:
	wget https://developers.italia.it/crawler/softwares.yml -O _data/crawler/softwares.yml
	wget https://developers.italia.it/crawler/amministrazioni.yml -O _data/crawler/amministrazioni.yml
	wget https://developers.italia.it/crawler/software_categories.yml -O _data/crawler/software_categories.yml
	wget https://developers.italia.it/crawler/software-open-source.yml -O _data/crawler/software-open-source.yml
	wget https://developers.italia.it/crawler/software-riuso.yml -O _data/crawler/software-riuso.yml
	wget https://developers.italia.it/crawler/software_scopes.yml -O _data/crawler/software_scopes.yml
	wget https://developers.italia.it/crawler/software_tags.yml -O _data/crawler/software_tags.yml
build-swagger:
	./_buildscripts/build-swagger.sh
test:
	JEKYLL_NO_GITHUB=true bundle exec htmlproofer ./_site --assume-extension --check-html --allow-hash-href --empty-alt-ignore --only-4xx --disable-external
local:
	JEKYLL_NO_GITHUB=true bundle exec jekyll serve
jekyll-build:
	JEKYLL_ENV=production bundle exec jekyll build
deploy:
	rsync -avP --rsync-path="sudo -u www-data rsync" _site/ developers.italia.it:/data/www/developers.italia.it/web/
include-npm-deps:
	mkdir -p $(VENDOR_DIR)
	npm install
	cp node_modules/jquery/dist/jquery.min.js $(VENDOR_DIR)
build: | include-npm-deps download-data build-swagger jekyll-build
build-test: | build test
