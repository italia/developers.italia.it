FROM ruby:2.5.1-alpine

# Add files
WORKDIR /usr/src/developers.italia.it
ADD . .

# Install dependencies
RUN apk add --no-cache --virtual .build-deps git build-base ruby-dev nodejs=8.9.3-r1
RUN bundle install

ENTRYPOINT ["/usr/src/developers.italia.it/start.sh"]
