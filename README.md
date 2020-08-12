# Developers Italia website (https://developers.italia.it)

[![Netlify Status](https://api.netlify.com/api/v1/badges/92a97b26-4e6c-4408-9270-9603f951eccf/deploy-status)](https://app.netlify.com/sites/developers-italia/deploys) [![CircleCI](https://circleci.com/gh/italia/developers.italia.it.svg?style=svg)](https://circleci.com/gh/italia/developers.italia.it)

The website of the developer community designing and developing public digital services in Italy.

The website is developed using [Jekyll](https://jekyllrb.com/) and it's currently served through [GitHub pages](https://pages.github.com/).

A [CircleCI job](.circleci/config.yml) builds the sources and commits the resulting artifacts to GitHub, in the [gh-pages branch](https://github.com/italia/developers.italia.it/tree/gh-pages). The [same job](.circleci/config.yml) is also triggered every night to get the most updated data feeding the website.

## Development

A development environment can be both brought up directly on the developer machine and in form of a Docker container.

The same commands -run in the [Dockerfile](Dockerfile)- can also be run directly on the developer machine.

The [docker-compose.yml](docker-compose.yml) file leverages some environment variables that should be declared in an *.env* file, located in the root of this repository. A [.env.example](.env.example) file has some exemplar values. Before proceeding, copy the [.env.example](.env.example) into *.env* and modify the environment variables as needed.

Then, build the container, running:

```shell
docker-compose up [-d] [--build]
```

where:

* *-d* execute the containers in background

* *--build* forces the containers build

To destroy the containers, use:

```shell
docker-compose down
```

Wait until the Docker logs explicitly say that the website is served on *0.0.0.0:4000*. Then, open a browser and navigate to http://localhost:4000 to preview the website.

### Recompile handlebars templates
Within folder `_templates` live some handlebars templates that operate in various areas.
Once they get modified it is necessary recompile them. To do that we can use `npx` utility as follow:

`npx handlebars@4.0.0 _templates/search.handlebars -f assets/templates/search.tpl.js`


## Makefile

Both the [CircleCI build](.circleci/config.yml) and the [Docker files](docker-compose.yml) leverage a [Makefile](Makefile), facilitating the execution of more complex routines.
You can have a look at the [Makefile](Makefile) to know more about the exact commands used to build the website.

## Environment variables

Some environment variables change the behavior of different aspects of your build/execution:

* **ELASTICSEARCH_URL**: the full Elasticsearch URL prefixed by the HTTP schema (http:// - https://). This is optional. If not set, Jekyll will exclude the [Searchyll integration](https://github.com/italia/developers-italia-searchyll) from the build. The variable is left empty by default in the [.env.example file](.env.example)

* **ELASTICSEARCH_USER**: the Elasticsearch username. This is optional and not set by default, as not all Elasticsearch servers authenticate users

* **ELASTICSEARCH_PASS**: the Elasticsearch password. This is optional and not set by default, as not all Elasticsearch servers authenticate users

* **GITHUB_ACCESS_TOKEN**: the optional GitHub access token to gain unlimited access GitHub API. Access tokens are associated with the Italia GitHub account.

* **JEKYLL_ENV**: can be set either to *development* (default) or *production*. The latter minifies and optimizes the build artifacts

* **NOKOGIRI_USE_SYSTEM_LIBRARIES**: can be either set to *true* or *false*. You usually want to set this to *true* (default). The [Nokogiri documentation](https://nokogiri.org/tutorials/installing_nokogiri.html#install-with-system-libraries) mentions that this allows to use the OS *libxml2* and *libxslt* libraries, instead of using the Nokogiri ones


## License

The source code is released under the BSD license (code SPDX: *BSD-3-Clause*) and it's distributed with this license since May 30th 2018. The previous code has been released under under the MIT license.
