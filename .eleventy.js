const now = String(Date.now());
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = function (config) {
  config.addWatchTarget('./tailwind.config.js');
  config.addWatchTarget('./assets/css/main.css');

  config.addPassthroughCopy('./assets/img');

  config.addShortcode('year', () => `${new Date().getFullYear()}`);

  config.addPlugin(eleventyNavigationPlugin);

  config.addShortcode('version', () => now);

  return {
    dir: {
      input: 'src/',
      output: '_site',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
    templateFormats: ['html', 'md', 'njk'],
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
};
