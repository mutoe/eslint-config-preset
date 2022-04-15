module.exports = {
  extends: [
    '@mutoe/eslint-config-preset-ts',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    'react-hooks',
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/no-danger': 'off',
  },
}
