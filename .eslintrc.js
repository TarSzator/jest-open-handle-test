const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  env: {
    jest: true,
    node: true,
    es6: true,
  },
  ignorePatterns: ['node_modules/', '**/*.test.js'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
  },
};
