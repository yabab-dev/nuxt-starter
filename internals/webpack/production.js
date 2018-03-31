const { join } = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CriticalPlugin = require('./critical');

const rootDir = join(__dirname, '../..');

module.exports = async function() {
  this.extendBuild((config, { isDev, isClient }) => {
    if (!isDev) {
      // Add Imagemin plugin
      config.plugins.push(
        new ImageminPlugin({
          test: /\.(jpe?g|png|gif|svg)$/i,
        }),
      );

      // Bundle Analyzer
      config.plugins.push(
        new BundleAnalyzerPlugin({
          openAnalyzer: false,
          analyzerMode: 'static',
          reportFilename: join(rootDir, 'tmp/analyzer.html'),
          generateStatsFile: true,
          statsFilename: join(rootDir, 'tmp/stats.json'),
        }),
      );

      if (isClient) {
        config.plugins.unshift(new CriticalPlugin());
      }
    }
  });
};
