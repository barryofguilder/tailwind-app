'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        extension: 'scss',
        enabled: true,
        parser: require('postcss-scss'),
        plugins: [
          require('@csstools/postcss-sass'),
          require('tailwindcss')('app/tailwind/config.js')
        ],
      },
    }
  });
  return app.toTree();
};
