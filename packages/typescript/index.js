module.exports = {
  extends: [
    '@mutoe/eslint-config-preset-basic',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'no-undef': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', {
      functions: false,
      classes: false,
      variables: false,
    }],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', 'always'],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error', 'all', {
      conditionalAssign: false,
      returnAssign: false,
      nestedBinaryExpressions: false,
      ignoreJSX: 'multi-line',
    }],

    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-void': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error', {
          allowExpressions: true,
          allowDirectConstAssertionInArrowFunctions: true,
        }],
      },
    },
    {
      files: ['**/*.test.ts?(x)'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ],
}
