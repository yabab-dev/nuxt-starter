const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = async function() {
  this.extendBuild((config, { isDev }) => {
    if (!isDev) {
      // Add Imagemin plugin
      config.plugins.push(
        new ImageminPlugin({
          test: /\.(jpe?g|png|gif|svg)$/i,
        }),
      );
    }
  });
};
