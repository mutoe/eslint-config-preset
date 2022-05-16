module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@mutoe/eslint-config-preset-ts',
  ],
  rules: {
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/promise-function-async': 'error',
  },
}
