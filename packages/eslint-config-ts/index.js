const INDENT = process.env.ESLINT_INDENT === 'tab' ? 'tab' : Number(process.env.ESLINT_INDENT) || 2
const SEMI = process.env.ESLINT_SEMI || 'never'
const SPACE_BEFORE_FUNCTION_PAREN = process.env.ESLINT_SPACE_BEFORE_FUNCTION_PAREN || 'always'

const basic = require('@mutoe/eslint-config-preset-basic')

module.exports = {
  extends: ['@mutoe/eslint-config-preset-basic'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },
  overrides: basic.overrides.concat([
    {
      files: ['*.ts?(x)', '*.{vue,svelte}'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      rules: {
        'indent': 'off',
        '@typescript-eslint/indent': ['error', INDENT, { SwitchCase: 1 }],
        'semi': 'off',
        '@typescript-eslint/semi': ['error', SEMI],
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': ['error', SPACE_BEFORE_FUNCTION_PAREN],
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', {
          functions: false,
          classes: false,
          variables: false,
        }],
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
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        'no-void': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-namespace': ['error', {
          allowDeclarations: true,
        }],
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['**/{composable,hooks}/*.{ts,tsx}', '**/use*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: [
        '**/*.snap',
        '**/*.{test,spec,e2e-spec,cy,fixture}.{js,ts,jsx,tsx}',
        '**/__{test,snapshot,mock}__/*.{js,jsx,ts,tsx}',
      ],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/require-await': 'off',
      },
    },
  ]),
}
