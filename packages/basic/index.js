/** Basic config */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  ignorePatterns: [
    'node_modules/',
    '.husky/_/',
    'pnpm-lock.yaml',
    'package-lock.json',
  ],
  extends: [
    '@mutoe/eslint-config-preset-standard',
    require.resolve('./package-json'),
  ],
  plugins: [
    'html',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
    },
  },
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      extends: ['plugin:yml/recommended'],
    },
    {
      files: ['*.json', '*.json5', '*.jsonc', '.swcrc'],
      parser: 'jsonc-eslint-parser',
      extends: ['plugin:jsonc/recommended-with-jsonc'],
      rules: {
        'comma-dangle': ['error', 'never'],
        'quote-props': ['error', 'always'],
        'quotes': ['error', 'double'],
        'semi': ['error', 'never'],
      },
    },
    {
      files: ['**/tsconfig*.json', '.swcrc'],
      rules: {
        'no-multi-spaces': 'off',
      },
    },
    {
      files: ['*.?(c|m)[tj]s?(x)'],
      extends: [
        'plugin:unicorn/recommended',
      ],
      rules: {
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        // off
        'import/no-unresolved': 'off',
        'prefer-promise-reject-errors': 'off',
        'unicorn/no-null': 'off',
        'unicorn/prefer-top-level-await': 'off',
        'unicorn/prefer-ternary': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/no-abusive-eslint-disable': 'off',
        'unicorn/text-encoding-identifier-case': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/filename-case': 'off',
        'unicorn/consistent-destructuring': 'off',

        // warning
        'no-alert': 'warn',
        'no-unused-vars': 'warn',
        'complexity': ['warn', 10],
        'max-depth': ['warn', 10],
        'max-lines': ['warn', 300],
        'max-lines-per-function': ['warn', 100],
        'max-nested-callbacks': ['warn', 3],
        'max-statements': ['warn', 20],
        'max-statements-per-line': ['warn', { max: 1 }],

        // error
        'block-scoped-var': 'error',
        'camelcase': ['error', { allow: ['^UNSAFE_', '^unstable_'], properties: 'never', ignoreGlobals: true }],
        'import/order': 'error',
        'indent': ['error', 2, { SwitchCase: 1 }],
        'jsx-quotes': ['error', 'prefer-single'],
        'no-extra-parens': ['error', 'all', { conditionalAssign: false, returnAssign: false, nestedBinaryExpressions: false, ignoreJSX: 'multi-line' }],
        'no-var': 'error',
        'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
        'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'operator-linebreak': ['error', 'before'],
        'quote-props': ['error', 'consistent-as-needed'],
        'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],
      },
    },
    {
      files: ['**/.*rc.js'],
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['*.{test,spec,cy}.?(c|m)[tj]s?(x)'],
      rules: {
        // off
        'max-lines-per-function': 'off',
        'max-lines': 'off',
        'max-statements': 'off',
        'max-statements-per-line': 'off',
        'n/no-callback-literal': 'off',

        // warn
        'max-depth': ['warn', 10],
        'max-nested-callbacks': ['warn', 5],

        // error
        'prefer-arrow-callback': [
          'error',
          {
            allowNamedFunctions: false,
            allowUnboundThis: true,
          },
        ],
      },
    },
  ],
  rules: {
    'unicode-bom': ['error', 'never'],
    'indent': ['error', 2],
    'eol-last': ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'no-trailing-spaces': ['error'],
    'comma-dangle': ['error', 'always-multiline'],
  },
}
