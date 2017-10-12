exports.config = {
  seleniumAddress: 'http://localhost:9515',

  capabilities: {
    browserName: 'chrome',
    platform: 'ANY',
    version: '',
    chromeOptions: {
      args: [
        'disable-gpu',
        'no-sandbox'
      ]
    }
  },
  chromeDriver: '/usr/bin/chromedriver',

  baseUrl:
        (process.env.HTTP_PROTOCOL || 'https://') +
        (process.env.HTTP_HOST || 'www.google.com') +
        (process.env.HTTP_PORT ? ':' + process.env.HTTP_PORT : ''),

  framework: 'mocha',
  mochaOpts: {
    reporter: 'spec',
    timeout: 10000
  },

  specs: ['../dist/**/*spec.js']
}
