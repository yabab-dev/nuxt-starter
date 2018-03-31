const merge = require('deepmerge');
const config = require('./internals/nuxt');

module.exports = merge(config, {
  /**
   * Head
   */
  head: {
    titleTemplate(title) {
      return title ? `${title} - Nuxt App` : `Nuxt App`;
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'My awesome app' },
    ],
  },

  /**
   * Progress bar
   */
  loading: { color: '#3B8070' },

  /**
   * Workbox
   */
  workbox: {},

  /**
   * PWA metas
   */
  meta: {},

  /**
   * PWA manifest
   */
  manifest: {
    name: 'Nuxt App',
    short_name: 'Nuxt App',
    lang: 'en',
    theme_color: '#3B8070',
    background_color: '#f6f6f6',
    description: 'My awesome app',
    display: 'standalone',
  },

  /**
   * SPA mode
   */
  // mode: 'spa',
  // router: {
  //   mode: 'hash',
  // },
  // loadingIndicator: {
  //   name: 'nuxt',
  //   color: '#3B8070',
  //   background: '#fefefe',
  // },
});
