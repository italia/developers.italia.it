<!-- markdownlint-disable no-inline-html -->

<h1 align="center">Developers Italia</h1>

<div align="center">
<img src=".github/logo.png" width="200">
<br />
<i> We develop public services, together </i>
</div>

<br />

 <!-- Badges -->
<div align="center">
  <img src="https://vercelbadge.vercel.app/api/italia/developers.italia.it" alt="Vercel"/>
  <a href="https://github.com/italia/developers.italia.it/releases">
    <img alt="GitHub tag (latest by date)" src="https://img.shields.io/github/v/tag/italia/developers.italia.it">
  </a>
  <a href="LICENSE.md">
    <img alt="LICENSE" src="https://img.shields.io/github/license/italia/developers.italia.it">
  </a>
</div>

<div align="center">
  <h3>
    <a href="https://developers.italia.it">
      Website
    </a>
    <span> | </span>
    <a href="https://developers.italia.it/en/software">
      Reuse Catalog
    </a>
    <span> | </span>
    <a href="https://github.com/italia/publiccode.yml">
      publiccode.yml
    </a>
    <span> | </span>
    <a href="CONTRIBUTING.md">
      Contributing
    </a>
    <span> | </span>
    <a href="https://slack.developers.italia.it">
      Meet us on Slack
    </a>
  </h3>
</div>

# Description

Developers Italia is the reference point for the community of developers
creating the next generation of digital public services in Italy.

This repository contains the sources of the website.
The website is developed using [Jekyll](https://jekyllrb.com/).

A [GitHub action job](.github/workflows/publish.yml) builds the sources, getting some data from
[developers.italia.it-data](https://github.com/italia/developers.italia.it-data),
and commits the resulting artifacts to the [gh-pages
branch](https://github.com/italia/developers.italia.it/tree/gh-pages).
The job is also triggered every night to get the latest data.

# Documentation

## Development

We use Docker and docker-compose to bring up the developer environment, just clone
the repo and

1. Copy the [`.env.example`](.env.example) file into `.env` and modify the
   environment variables as it suits you.
   [`.env.example`](.env.example) holds the detailed description of each variable.

   ```shell
   cp .env.example .env
   ```

2. Set the `RUNAS` variable to your user:

   ```shell
   echo RUNAS=$(id -u):$(id -g) >> .env
   ```

3. Build the container:

   ```shell
   docker-compose up
   ```

Wait until the Docker logs explicitly say that the website is served at
`0.0.0.0:4000` and navigate to `http://localhost:4000` to preview the website.

Jekyll will pick up changes to the Markdown files and recompile them on the fly.

If you change the `Gemfile` or `package.json`, you'll need to rebuild the image with:

```shell
docker-compose up --build
```

## Makefile

Both the [CircleCI build](.circleci/config.yml) and the [Docker
files](docker-compose.yml) leverage a [Makefile](Makefile), facilitating the
execution of more complex routines.
You can have a look at the [Makefile](Makefile) to know more about the exact
commands used to build the website.

# Community

## Code of Conduct

Please review our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a great
collaboration with the rest of the community.

## Contributing

Developers Italia exists also thanks to your contributions!
Here is a list of users who already contributed to this repository:
<a href="https://github.com/italia/developers.italia.it/graphs/contributors">
  <img
  src="https://contributors-img.web.app/image?repo=italia/developers.italia.it"
  />
</a>

This list is also displayed in the [Developers Italia
website](https://developers.italia.it/en/contacts).

Every contribution is welcome! However, before proceeding further please take
a look at our [contributing guidelines](CONTRIBUTING.md).

# License

Copyright (c) 2018-2020 - Presidenza del Consiglio dei Ministri

The source code is released under the BSD license (SPDX code: `BSD-3-Clause`)
and it's distributed with this license since May 30th 2018.

The previous code has been released under under the MIT license.
