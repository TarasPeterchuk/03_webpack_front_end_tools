module.exports = {
  extends: 'eslint-config-airbnb-base',
  rules: {
    'no-console': 2,
    'linebreak-style': ['error', 'windows'],
    'import/prefer-default-export': 0,
  },
  env: {
    browser: true,
  },
};
