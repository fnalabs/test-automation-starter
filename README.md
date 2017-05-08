# docker-auto-test-starter
Docker starter kit for [js-auto-test](https://www.npmjs.com/package/js-auto-test) implementations.

## Purpose
The purpose of this starter kit is to provide the base constructs to develop and build automated UI tests in a sandboxed environment. It provides all of the features of [docker-nodejs-starter](https://github.com/aeilers/docker-nodejs-starter) with a few differences. These differences are with the Docker implementation specifically:
- Development
  - It still uses the same `docker-compose` setup for development.
  - When a test file is saved, it automatically starts the tests to run as they are defined in the [config](./conf/config.js).
- Production
  - Production tests are run with the [test](./bin/test) script.

## Supported browser(s)
Currently, Google Chrome is the only supported browser. However, investigation on running Firefox is in the works.
