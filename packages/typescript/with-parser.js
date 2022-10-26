module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@mutoe/eslint-config-preset-ts'],
  overrides: [
    {
      files: ['*.?(m|c)[tj]s?(x)'],
      extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
      rules: {
        '@typescript-eslint/promise-function-async': 'error',
      },
    },
  ],
}
