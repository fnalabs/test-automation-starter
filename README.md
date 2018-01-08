# test-automation-starter

[![Build Status][circle-image]][circle-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Dev Dependency Status][devdepstat-image]][devdepstat-url]
[![JavaScript Style Guide][style-image]][style-url]

Docker starter kit for [test-automation](https://www.npmjs.com/package/test-automation) implementations.

## Purpose
The purpose of this starter kit is to provide the base constructs to develop and build automated UI tests in a controlled environment. It provides all of the features of [starter-koa2-js](https://github.com/fnalabs/starter-koa2-js) with a few small differences. These differences are with the Docker implementation specifically:
- Development
  - When a test implementation file is saved, it automatically starts the tests to run as they are defined in the [config](./conf/config.js).
- Production
  - Production tests are run with the [test](./bin/test) script.

## Supported browser(s)
Currently, Google Chrome is the only supported browser. However, investigation on running Firefox is in the works.

[circle-image]: https://img.shields.io/circleci/project/github/fnalabs/test-automation-starter.svg
[circle-url]: https://circleci.com/gh/fnalabs/test-automation-starter

[depstat-image]: https://img.shields.io/david/fnalabs/test-automation-starter.svg
[depstat-url]: https://david-dm.org/fnalabs/test-automation-starter

[devdepstat-image]: https://img.shields.io/david/dev/fnalabs/test-automation-starter.svg
[devdepstat-url]: https://david-dm.org/fnalabs/test-automation-starter?type=dev

[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: https://standardjs.com
