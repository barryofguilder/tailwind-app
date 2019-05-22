'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  // This allows you to still write SASS, but take advantage of the Tailwind functions such as `@apply`.
  // TODO: If you rename the `app.css` file to `app.scss`, a build error will occur that says:
  //         Build Error (PostcssCompiler)
  //           File not found: /app/styles/app.css
  //       It's almost like it's still looking for `app.css` even though it's configured to look for
  //       `scss` extensions. The below config was based on the ember-cli-postcss addon that's in the
  //       readme file in the section titled "Switching from SASS".
  //       For now, I'm just leaving the file name as `app.css`. It still allows you to write SASS
  //       in it, you just don't get the syntax highlighting.
  let app = new EmberApp(defaults, {
    postcssOptions: {
      extension: 'scss',
      enabled: true,
      parser: require('postcss-scss'),
      compile: {
        plugins: [
          require('@csstools/postcss-sass'),
          require('tailwindcss')
        ]
      }
    }
  });
  // This will compile Tailwind using just plain CSS.
  // let app = new EmberApp(defaults, {
  //   postcssOptions: {
  //     compile: {
  //       plugins: [
  //         require('tailwindcss')
  //       ]
  //     }
  //   }
  // });
  return app.toTree();
};
