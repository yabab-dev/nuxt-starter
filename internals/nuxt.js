const { join } = require('path');

const babel = require('./babel');

module.exports = {
  /**
   * Sources directory
   */
  srcDir: 'src',

  /**
   * Webpack build
   */
  build: {
    babel: babel(),
    extractCSS: true,
    cssSourceMap: true,
    optimization: {
      splitChunks: {
        name: true,
      },
    },
  },

  /**
   * Plugins
   */
  plugins: [
    '~~/internals/modules/plugin',
    {
      src: '~~/internals/tota11y',
      ssr: false,
    },
  ],

  /**
   * Nuxt modules
   */
  modules: [
    // Community modules
    '@nuxtjs/router',
    ['@nuxtjs/dotenv', { path: join(__dirname, '..') }],
    '@nuxtjs/component-cache',
    '@nuxtjs/pwa',

    // Custom modules
    '~~/internals/typescript',
    '~~/internals/webpack/all',
    '~~/internals/webpack/development',
    '~~/internals/webpack/production',
  ],
};
