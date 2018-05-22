export default ({ isDev }) => {
  if (isDev) require('tota11y/build/tota11y.min');
};
