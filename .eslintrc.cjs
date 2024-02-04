module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': [
      // eslint-disable-next-line no-bitwise
      'off' | 'warn' | 'error',
      // eslint-disable-next-line no-bitwise
      { target: 'single' | 'any' }, // default is "single"
    ],
  },
};
