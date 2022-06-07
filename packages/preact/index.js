module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'preact',
    '@mutoe/eslint-config-preset-ts',
  ],
  rules: {
    'react/no-danger': 'off',
  },
  overrides: [
    {
      files: ['**/!(*.test|*.spec).[tj]s?(x)'],
      extends: [
        'plugin:jsx-a11y/recommended',
      ],
      rules: {
        'jsx-a11y/interactive-supports-focus': 'warn',
        'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/no-static-element-interactions': 'warn',
      },
    },
  ],
}
