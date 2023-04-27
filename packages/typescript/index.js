module.exports = {
  extends: ['@mutoe/eslint-config-preset-basic'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },
  overrides: [
    {
      files: ['*.ts?(x)', '*.(vue|svelte)'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
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
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: { delimiter: 'none' },
          singleline: { delimiter: 'comma' },
        }],
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': ['error', {
          allowArgumentsExplicitlyTypedAsAny: true,
          allowTypedFunctionExpressions: true,
        }],
        'no-void': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-namespace': ['error', {
          allowDeclarations: true,
        }],
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['*.{test,spec,cy,e2e-spec}.{js,ts,cjs,mjs,jsx,tsx}'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
}
