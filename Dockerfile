FROM cimg/ruby:2.6-browsers

ENV PORT 4000
ENV NOKOGIRI_USE_SYSTEM_LIBRARIES true

WORKDIR /usr/src/developers.italia.it

USER root

RUN apt-get update \
    && apt-get install -y wait-for-it \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

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
COPY 403.html .
COPY 404.html .
COPY 500.html .
COPY _config.yml .
COPY favicon.ico .
COPY Gemfile .
COPY Gemfile.lock .
COPY LICENSE .
COPY Makefile .
COPY webpack.common.js .
COPY webpack.dev.js .
COPY webpack.prod.js .
COPY babel.config.js .
COPY package-lock.json .
COPY package.json .

RUN make include-npm-deps
RUN make bundle-install
RUN make download-data

EXPOSE 4000 8080 35729

CMD ["make", "local"]
