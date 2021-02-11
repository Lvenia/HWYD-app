module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@babel',
    'react-hooks',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/state-in-constructor': [0],
    'react/prop-types': [0],
    'consistent-return': [0],
    'react/no-unused-state': [0],
    'no-param-reassign': [0],
    'no-return-assign': [0],
    'react/no-access-state-in-setstate': [0],
    'no-case-declarations': [0],
    'react-hooks/exhaustive-deps': [0],
  },
};
