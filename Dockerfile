# start with Alpine Linux Base image
# NOTE: change FROM statement to preferred Node.js image
FROM node:6.10.1-alpine
MAINTAINER Adam Eilers <adam.eilers@gmail.com>

# NOTE: if user created, change APP_PATH to user's workspace
ARG APP_PATH="/opt/test"
ARG APP_SOURCE="test.tar.gz"
ARG NODE_ENV

# set environment variables
ENV NODE_ENV="${NODE_ENV:-production}" \
    DBUS_SESSION_BUS_ADDRESS=/dev/null

# Project code
# NOTE: APP_SOURCE can use build process compressed output for smaller production builds
ADD ${APP_SOURCE} ${APP_PATH}

# change to workspace and run project install script
WORKDIR ${APP_PATH}
RUN apk update \
    && apk add bash-completion \
    && bash ./bin/install

# expose standard Node.js port of 3000
EXPOSE 9515

# NOTE: calls js-auto-test with default config
CMD ["npm", "test"]
