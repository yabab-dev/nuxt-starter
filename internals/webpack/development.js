module.exports = async function() {
  if (this.options.dev) {
    this.addVendor('tota11y/build/tota11y.min');
  }
};
