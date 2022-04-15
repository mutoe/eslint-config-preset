module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@mutoe/eslint-config-preset-basic',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    // '@typescript-eslint/semi': ['error', 'never'],
    // '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    // '@typescript-eslint/type-annotation-spacing': ['error', {}],
    // '@typescript-eslint/no-redeclare': 'error',
  },
}
