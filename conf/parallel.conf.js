exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY',
  
    updateJob: false,
    specs: [
        './tests/features/single_test.feature'
    ],
    exclude: [],
  
    maxInstances: 10,
    commonCapabilities: {
      'name': 'parallel_appium_test',
      'build': 'WebDriverIO Cucumberjs Android',
      'project': 'WebDriverIO Cucumberjs',
      'browserName': 'android',
      'app': process.env.BROWSERSTACK_APP_ID || 'BROWSERSTACK_APP_ID',

      'browserstack.debug': true
    },
  
    capabilities: [{
      'device': 'Google Pixel',
    }, {
      'device': 'Samsung Galaxy S20',
    }, {
      'device': 'Samsung Galaxy Note 10',
      'os_version': '9.0'
    }],
  
    logLevel: 'verbose',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 20000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'cucumber',
    cucumberOpts: {
        require: require('glob').sync('./tests/step-definitions/single-steps.js'),        // <string[]> (file/dir) require files before executing features
        backtrace: false,   // <boolean> show full backtrace for errors
        compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        source: true,       // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: false,      // <boolean> fail if there are any undefined or pending steps
        tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 30000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    },
  };
  
  // Code to support common capabilities
  exports.config.capabilities.forEach(function(caps){
    for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
  });
