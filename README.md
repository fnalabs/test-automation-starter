# docker-auto-test-starter

[![Build Status][circle-image]][circle-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Dev Dependency Status][devdepstat-image]][devdepstat-url]
[![JavaScript Style Guide][style-image]][style-url]

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

[circle-image]: https://img.shields.io/circleci/project/github/aeilers/docker-auto-test-starter.svg
[circle-url]: https://circleci.com/gh/aeilers/docker-auto-test-starter

[depstat-image]: https://img.shields.io/david/aeilers/docker-auto-test-starter.svg
[depstat-url]: https://david-dm.org/aeilers/docker-auto-test-starter

[devdepstat-image]: https://img.shields.io/david/dev/aeilers/docker-auto-test-starter.svg
[devdepstat-url]: https://david-dm.org/aeilers/docker-auto-test-starter?type=dev

[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: https://standardjs.com
