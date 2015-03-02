var broccoli = require('broccoli');

var filterCoffeeScript = require('broccoli-coffee');
var fastBrowserify = require('broccoli-fast-browserify');
var mergeTrees = require('broccoli-merge-trees');
var concat = require('broccoli-concat');
var coffeeTree = filterCoffeeScript('src/coffee');

var browserifyTree = fastBrowserify('src', {
  bundles: {
    'js/bundle.js': {
      entryPoints: ['js/index.js']
    }
  }
});

var concatenated = concat(mergeTrees([coffeeTree, browserifyTree]), {
  inputFiles: [
    'index.js',
    'js/bundle.js'
  ],
  outputFile: '/js/bundle.js',
});

module.exports = concatenated;