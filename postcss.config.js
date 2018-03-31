module.exports = {
  plugins: {
    'postcss-cssnext': {
      browsers: ['> 1%', 'last 2 versions', 'safari >= 7'],
      warnForDuplicates: false,
    },
    cssnano: {
      zindex: false,
    },
  },
};
