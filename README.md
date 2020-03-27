# test-automation-starter

[![Dependency Status][depstat-image]][depstat-url]
[![Dev Dependency Status][devdepstat-image]][devdepstat-url]
[![JavaScript Style Guide][style-image]][style-url]

Docker starter kit for [test-automation](https://www.npmjs.com/package/test-automation) implementations.

#### Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
  - [Environment Variables](#environment-variables)
- [Supported browser(s)](#supported-browsers)
- [Future](#future)
- [Changelog](#changelog)

## Getting Started
The purpose of this starter kit is to provide the base constructs to develop and build automated browser tests in a controlled environment. It provides all of the features of [starter-koa2-js](https://github.com/fnalabs/starter-koa2-js) with a few small differences. These differences are with the Docker implementation specifically:
- Development
  - When a test implementation file is saved, it automatically starts the tests to run as they are defined in the [config](./src/config.js).
- Production
  - Production tests are run with the [test](./bin/test) script.

### Prerequisites
To use, you'll need a few things:
- **Required**
  - [Docker](https://www.docker.com/)
  - [Docker Compose](https://docs.docker.com/compose/)

### Installing
To start using in your own environment, build:
```sh
$ git clone git@github.com:fnalabs/test-automation-starter.git
$ cd test-automation-starter
$ docker-compose build
$ docker-compose up
```

### Environment variables
Below is a table describing the possible environment variables to run the `test-automation-starter` kit. You can override these settings if/when required. This option works great if using the standard setup within a Docker container.

Name           | Type    | Default           | Description
-------------- | ------- | ----------------- | --------------------------------------------
SCREEN_WIDTH   | Number  | 1280              | screen width to test against
SCREEN_HEIGHT  | Number  | 1024              | screen height to test against
HTTP_PROTOCOL  | String  | 'https://'        | HTTP protocol of test location
HTTP_HOST      | String  | 'www.google.com'  | HTTP host domain hame or IP of test location
HTTP_PORT      | String  |                   | optional HTTP port of test location

## Supported browser(s)
Currently, Google Chrome is the only supported browser. However, investigation on running Firefox is in the works.

## Future
- feature requests via [issues](https://github.com/fnalabs/test-automation-starter/issues)

## [Changelog](https://github.com/fnalabs/test-automation-starter/releases)

[depstat-image]: https://img.shields.io/david/fnalabs/test-automation-starter.svg
[depstat-url]: https://david-dm.org/fnalabs/test-automation-starter

[devdepstat-image]: https://img.shields.io/david/dev/fnalabs/test-automation-starter.svg
[devdepstat-url]: https://david-dm.org/fnalabs/test-automation-starter?type=dev

[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: https://standardjs.com
