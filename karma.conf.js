var webpackConfig = require('./webpack.config.js');
module.exports = function (config) {
  config.set({
    browsers: ['Chrome'], //browers to use for testng
    singleRun: true,
    frameworks: ['mocha'], //frameworks used in testing
    files: ['app/tests/**/*.test.jsx'], //globbing pattern
    preprocessors: {
      'app/tests/**/*.test.jsx':['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack:webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
}
