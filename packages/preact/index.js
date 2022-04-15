module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:jsx-a11y/recommended',
    'preact',
    '@mutoe/eslint-config-preset-ts',
  ],
  rules: {
    'react/no-danger': 'off',
  },
}
