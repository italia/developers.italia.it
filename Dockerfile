FROM circleci/ruby:2.6.0-node-browsers

ENV PORT 4000
ENV NOKOGIRI_USE_SYSTEM_LIBRARIES true

WORKDIR /usr/src/developers.italia.it

USER root

# rsync is needed by Swagger
RUN apt-get install -y --no-install-recommends rsync \
  && apt-get clean \
  && rm -fr /var/lib/apt/lists/*

USER ${RUNAS}

# Copy useful files inside the workdir
COPY .well-known .well-known
COPY _data _data
COPY _includes _includes
COPY _layouts _layouts
COPY _platforms _platforms
COPY _plugins _plugins
COPY _posts _posts
COPY assets assets
COPY en en
COPY it it
COPY swagger swagger
COPY 403.html .
COPY 404.html .
COPY 500.html .
COPY _config.yml .
COPY favicon.ico .
COPY Gemfile .
COPY Gemfile.lock .
COPY LICENSE .
COPY Makefile .
COPY package-lock.json .
COPY package.json .

EXPOSE 4000 8080 35729

CMD ["make", "local"]
