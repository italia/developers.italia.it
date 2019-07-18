VENDOR_DIR = assets/vendor/

.PHONY: deploy
local:
	JEKYLL_NO_GITHUB=true bundle exec jekyll serve
deploy:
	JEKYLL_ENV=production bundle exec jekyll build
	rsync -avP --rsync-path="sudo -u www-data rsync" _site/ developers.italia.it:/data/www/developers.italia.it/web/
include-npm-deps:
	mkdir -p $(VENDOR_DIR)
	cp node_modules/jquery/dist/jquery.min.js $(VENDOR_DIR)