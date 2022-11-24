module.exports = {
  extends: 'eslint-config-airbnb-base',
  rules: {
    'no-console': 1,
    eqeqeq: 2,
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
  },
};

// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": "eslint:recommended",
//     "overrides": [
//     ],
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//     },
//     "rules": {
//     }
// }
