module.exports = async function() {
  this.extendBuild(config => {
    if (this.options.dev) {
      // Add tota11y
      if (config.entry.vendor) {
        config.entry.vendor.push('tota11y/build/tota11y.min');
      }
    }
  });
};
