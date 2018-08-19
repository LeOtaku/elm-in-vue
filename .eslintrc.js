module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    // Custom
    'semi': ['off'],
    'comma-dangle': ['off'],

    // Ideally: functions
    'object-shorthand': ['warn', 'consistent'],
    'no-unused-vars': ['warn'],
    'prefer-const': ['warn'],

    'func-names': ['off', 'as-needed'],
    'quote-props': ['error', 'consistent'],

    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }],

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
