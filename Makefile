.PHONY: deploy
local:
	JEKYLL_NO_GITHUB=true bundle exec jekyll serve
deploy:
	JEKYLL_ENV=production bundle exec jekyll build
	rsync -avP --rsync-path="sudo -u www-data rsync" _site/ developers.italia.it:/data/www/developers.italia.it/web/
