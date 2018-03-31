module.exports = async function() {
  this.extendBuild((config, { isClient }) => {
    // ESLint
    if (isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|ts|vue)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      });
    }

    // Json
    config.module.rules.push({
      test: /\.json$/,
      loader: 'json-loader',
    });

    // Yaml
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: [{ loader: 'json-loader' }, { loader: 'yaml-loader' }],
    });

    // Modules manager
    config.resolve.alias['vue-mm'] = '~~/internals/modules/manager';
  });
};
