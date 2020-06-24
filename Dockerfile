FROM circleci/ruby:2.6.0-node-browsers

# Env variables definition
ENV USER developers
ENV HOME /usr/src/developers.italia.it
ENV PORT 4000

# Set the work directory
WORKDIR ${HOME}

# Copy useful files inside the workdir
COPY .well-known .well-known
COPY _data _data
COPY _includes _includes
COPY _layouts _layouts
COPY _pages _pages
COPY _platforms _platforms
COPY _plugins _plugins
COPY _posts _posts
COPY _sass _sass
COPY _templates _templates
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

# Temporarily set user to root
USER root

# Install required software
RUN which rsync || sudo apt-get install rsync

# Run as unprivileged user
RUN adduser --home ${HOME} --shell /bin/bash --disabled-password ${USER}

# Set user ownership on workdir and subdirectories
RUN chown -R ${USER}.${USER} ${HOME}

# Fix permissions for Linux users
RUN chmod a+rwx -R .

# Set running user
USER ${USER}

RUN make include-npm-deps
RUN make build-bundle
RUN make download-data
RUN make build-swagger

EXPOSE ${PORT}

CMD ["make", "local"]
