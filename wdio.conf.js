exports.config = {
    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],

    maxInstances: 10,
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                
            }
        },
        {
            browserName: 'firefox',
            'moz:firefoxOptions': {
                
            }
        }
    ],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://cnt-c68b8177-bb7c-497b-8ece-72721895b4fc.containerhub.tripleten-services.com',
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: [
        'chromedriver',
        'geckodriver',
        'intercept'
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};