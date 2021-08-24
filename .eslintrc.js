module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'class-methods-use-this': 0,
    'import/no-unresolved': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'linebreak-style': 0,
  },
};
