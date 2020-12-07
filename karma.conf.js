const path = require('path')

// Karma configuration
// Generated on Wed Jun 26 2019 00:32:00 GMT+0800 (China Standard Time)

module.exports = function (config) {
  const {
    FF,
    SF
  } = process.env

  let browsers = []
  let customLaunchers = {}


  if (FF) {
    browsers = ['FirefoxHeadless']
  } else if (SF) {
    browsers = ['Safari']
  } else {
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
      },
      {
        pattern: 'test/jsonp-invalid.js',
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
    reporters: ['progress', 'coverage'],

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

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers,

    customLaunchers,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
