#!/bin/sh

npm install

bundle exec jekyll serve --incremental --force_polling -H 0.0.0.0 -P 4000
