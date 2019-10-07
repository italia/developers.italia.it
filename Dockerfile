FROM ruby:2.5-alpine

# Add files
WORKDIR /usr/src/developers.italia.it
ADD . .

# Install dependencies
RUN apk add --no-cache --virtual .build-deps git build-base ruby-dev nodejs=10.16.3-r0 npm && \
    gem install bundler -v 2.0.1
RUN npm install && bundle install

ENTRYPOINT ["/usr/src/developers.italia.it/start.sh"]
