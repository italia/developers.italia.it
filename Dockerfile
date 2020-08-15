FROM circleci/ruby:2.6.0-node

ENV NOKOGIRI_USE_SYSTEM_LIBRARIES true

WORKDIR /usr/src/developers.italia.it

USER root

RUN apt-get update \
    && apt-get install -y --no-install-recommends wait-for-it=0.0~git20160501-1 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    \
    && gem install bundler:2.1.4 \
    && chown circleci:circleci .

USER circleci

COPY --chown=circleci . .

RUN bundle config set deployment 'true' \
    && bundle install \
    && make setup
