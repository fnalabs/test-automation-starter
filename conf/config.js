exports.config = {
    directConnect: process.env.DIRECT_CONNECT || true,

    capabilities: {
        browserName: 'chrome',
        platform: 'ANY',
        version: ''
        // version: '',
        // chromeOptions: {
        //     args: [
        //         'no-sandbox'
        //     ]
        // }
    },
    // chromeDriver: '/usr/bin/chromedriver',

    baseUrl:
        (process.env.HTTP_PROTOCOL || 'https://') +
        (process.env.HTTP_HOST || 'www.google.com') +
        (process.env.HTTP_PORT ? ':' + process.env.HTTP_PORT : ''),

    framework: 'mocha',
    mochaOpts: {
        reporter: 'spec',
        timeout: 5000
    },

    specs: ['../dist/**/*spec.js']
};
