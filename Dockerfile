# start with Alpine Linux Node image for development
FROM node:10.16.3-alpine as development

ARG APP_PATH="/opt/test"
ARG NODE_ENV="development"

# set environment variables
ENV NODE_ENV="${NODE_ENV}" \
    DBUS_SESSION_BUS_ADDRESS=/dev/null

# Project code
COPY . ${APP_PATH}

# change to workspace and run project install script
WORKDIR ${APP_PATH}
RUN apk add --update --no-cache bash-completion && \
    bash ./bin/install && \
    npm run release

# expose standard headless Chrome port
EXPOSE 9515

# use Alpine Linux Node image for production
FROM node:10.16.3-alpine as production

ARG APP_PATH="/opt/test"
ARG NODE_ENV="production"

# set environment variables
ENV NODE_ENV="${NODE_ENV}" \
    DBUS_SESSION_BUS_ADDRESS=/dev/null

# Project code
COPY --from=development ${APP_PATH}/test.tar.gz ${APP_PATH}

# change to workspace and run project install script
WORKDIR ${APP_PATH}
RUN apk add --update --no-cache bash-completion && \
    bash ./bin/install

# expose standard Node.js port of 3000
EXPOSE 9515

# NOTE: calls auto-test with default config
ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "start"]
