module.exports = {
  plugins: {
    'postcss-cssnext': {
      browsers: ['> 1%', 'not op_mini all'],
      warnForDuplicates: false,
    },
    cssnano: {
      zindex: false,
    },
  },
};
