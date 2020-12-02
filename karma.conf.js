const path = require('path')
const pkg = require('./package.json')

// Karma configuration
// Generated on Wed Jun 26 2019 00:32:00 GMT+0800 (China Standard Time)

module.exports = function (config) {
  const {
    BS,
    BROWSERSTACK_USERNAME,
    BROWSERSTACK_ACCESS_KEY
  } = process.env
  const browserStack = {}
  let customLaunchers = {}
  let reporters = []

  if (BS && BROWSERSTACK_USERNAME && BROWSERSTACK_ACCESS_KEY) {
    browserStack.username = BROWSERSTACK_USERNAME
    browserStack.accessKey = BROWSERSTACK_ACCESS_KEY
    browserStack.project = pkg.name

    reporters = ['dots', 'BrowserStack']
    customLaunchers = {
      bs_chrome_win: {
        base: 'BrowserStack',
        browser: 'Chrome',
        browser_version: '77.0',
        os: 'Windows',
        os_version: '10'
      },
      bs_firefox_win: {
        base: 'BrowserStack',
        browser: 'Firefox',
        browser_version: '69.0',
        os: 'Windows',
        os_version: '10'
      },
      bs_edge_win: {
        base: 'BrowserStack',
        browser: 'Edge',
        browser_version: '18.0',
        os: 'Windows',
        os_version: '10'
      },
      bs_safari_mac: {
        base: 'BrowserStack',
        browser: 'Safari',
        browser_version: '12.1',
        os: 'OS X',
        os_version: 'Mojave'
      },
      // bs_ie11_win: {
      //   base: 'BrowserStack',
      //   browser: 'IE',
      //   browser_version: '11.0',
      //   os: 'Windows',
      //   os_version: '8.1'
      // },
      // bs_ie10_win: {
      //   base: 'BrowserStack',
      //   browser: 'IE',
      //   browser_version: '10.0',
      //   os: 'Windows',
      //   os_version: '8'
      // },
      // bs_ie9_win: {
      //   base: 'BrowserStack',
      //   browser: 'IE',
      //   browser_version: '9.0',
      //   os: 'Windows',
      //   os_version: '7'
      // },
      // bs_ios13: {
      //   base: 'BrowserStack',
      //   device: 'iPhone 8',
      //   real_mobile: 'true',
      //   os: 'ios',
      //   os_version: '13'
      // },
      bs_android9: {
        base: 'BrowserStack',
        device: 'Google Pixel 3',
        real_mobile: 'true',
        os: 'android',
        os_version: '9.0'
      }
    }
  } else {
    reporters = ['progress', 'coverage']
    customLaunchers = {
      ChromeNoSandboxHeadless: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222'
        ]
      }
    }
  }

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/chai/chai.js',
      'node_modules/sinon/pkg/sinon.js',
      'test/setup.ts',
      'test/**/*.spec.ts',
      {
        pattern: 'test/jsonp.js',
        included: false
      }
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.ts': ['webpack', 'sourcemap'],
      'test/**/*.ts': ['webpack', 'sourcemap'],
      'test/**/*.spec.ts': ['webpack', 'sourcemap'],
      'test/fixtures/**/*': ['file-fixtures']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters,

    coverageReporter: {
      reporters: [
        { type: 'html' },
        { type: 'lcovonly' }
      ],
      subdir: '.'
    },

    // webpack
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['.mjs', '.js', '.json', '.ts']
      },
      module: {
        rules: [
          {
            test: /\.(js|ts)$/,
            use: [
              'babel-loader'
            ],
            include: [
              path.resolve('src/'),
              path.resolve('test/')
            ]
          }
        ]
      }
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values:
    //   config.LOG_DISABLE ||
    //   config.LOG_ERROR ||
    //   config.LOG_WARN ||
    //   config.LOG_INFO ||
    //   config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // browserStack global configuration
    browserStack,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(customLaunchers),

    customLaunchers,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
