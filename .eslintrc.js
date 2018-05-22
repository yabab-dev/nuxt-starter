module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    // Babel
    parser: 'babel-eslint',

    // TypeScript
    // parser: 'typescript-eslint-parser',
    // plugins: ['typescript'],
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
  ],
  rules: {
    'no-console': 'warn',
    // TypeScript bugs
    // 'no-undef': 'off',
    // 'no-unused-vars': 'off',
  },
};
