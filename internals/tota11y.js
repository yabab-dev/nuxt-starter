export default ({ isDev }) => {
  if (isDev) {
    // eslint-disable-next-line
    const lib = import(/* webpackChunkName: "tota11y" */ 'tota11y/build/tota11y.min');
  }
};
