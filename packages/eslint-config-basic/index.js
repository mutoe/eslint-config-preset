const INDENT = process.env.ESLINT_INDENT === 'tab' ? 'tab' : Number(process.env.ESLINT_INDENT) || 2
const SEMI = process.env.ESLINT_SEMI || 'never'
const SPACE_BEFORE_FUNCTION_PAREN = process.env.ESLINT_SPACE_BEFORE_FUNCTION_PAREN || 'always'

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  ignorePatterns: [
    // library
    'node_modules',
    '.husky/_/',
    '.vitepress/cache',

    // generated dirs
    'coverage',
    'build',
    'output',
    'dist',
    'pnpm-lock.yaml',
    'package-lock.json',
    '__snapshots__',
  ],
  extends: [
    require.resolve('./standard'),
  ],
  plugins: [
    'html',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
  overrides: [
    // FIXME: yml lint has error
    // {
    //   files: ['*.yaml', '*.yml'],
    //   parser: 'yaml-eslint-parser',
    //   extends: ['plugin:yml/recommended'],
    // },
    {
      files: ['*.json', '*.json5', '*.jsonc', '.swcrc'],
      parser: 'jsonc-eslint-parser',
      extends: ['plugin:jsonc/recommended-with-jsonc'],
      rules: {
        'jsonc/auto': 'error',
        'comma-dangle': ['error', 'never'],
        'quote-props': ['error', 'always'],
        'quotes': ['error', 'double'],
        'semi': ['error', 'never'],
      },
    },
    ...require('./package-json').overrides,
    {
      files: ['**/tsconfig*.json', '.swcrc'],
      rules: {
        'no-multi-spaces': 'off',
        'comma-dangle': ['error', 'always-multiline'],
      },
    },
    {
      files: ['*.{js,jsx,cjs,mjs,ts,tsx,vue}'],
      extends: [
        'plugin:unicorn/recommended',
        'plugin:import/recommended',
      ],
      rules: {
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        // off
        'no-useless-constructor': 'off',
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
        'unicorn/no-nested-ternary': 'off',
        'unicorn/explicit-length-check': 'off',
        'unicorn/no-lonely-if': 'off',
        'unicorn/prefer-regexp-test': 'off',
        'unicorn/prefer-type-error': 'off',
        'unicorn/prefer-spread': 'off',
        'unicorn/better-regex': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/numeric-separators-style': 'off',
        'unicorn/new-for-builtins': 'off',
        'import/namespace': 'off',
        'unicorn/no-hex-escape': 'off',
        'unicorn/escape-case': 'off',
        'unicorn/prefer-module': 'off',

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
        'indent': ['error', INDENT, { SwitchCase: 1 }],
        'semi': ['error', SEMI],
        'space-before-function-paren': ['error', SPACE_BEFORE_FUNCTION_PAREN],

        'block-scoped-var': 'error',
        'camelcase': ['error', { allow: ['^UNSAFE_', '^unstable_'], properties: 'never', ignoreGlobals: true }],
        'sort-imports': [
          'error',
          {
            ignoreDeclarationSort: true,
            ignoreCase: false,
          },
        ],
        'import/order': [
          'error',
          {
            'groups': [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
            ],
            'pathGroupsExcludedImportTypes': [],
            'newlines-between': 'never',
            'alphabetize': {
              order: 'asc',
              orderImportKind: 'asc',
              caseInsensitive: true,
            },
            'pathGroups': [
              {
                pattern: '{react,vue}*',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '{src,test,lib,type}?(s)/**',
                group: 'internal',
              },
            ],
          },
        ],
        'jsx-quotes': ['error', 'prefer-single'],
        'no-extra-parens': ['error', 'all', {
          conditionalAssign: false,
          returnAssign: false,
          nestedBinaryExpressions: false,
          ignoreJSX: 'multi-line',
        }],
        'no-var': 'error',
        'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
        'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'operator-linebreak': ['error', 'before'],
        'quote-props': ['error', 'consistent-as-needed'],
        'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],
        'array-element-newline': ['error', 'consistent'],
      },
    },
    {
      files: [
        '.{eslint,prettier,swc,babel,postcss,stylelint}rc*',
        '{vite,webpack,next,nuxt,nest,vue}?(.*).config.{js,cjs,mjs,ts}',
        '{eslint,lint-staged,husky,commitlint}?(.*).config.{js,cjs,mjs,ts}',
        '{jest,vitest,cypress}?(.*).config.{js,cjs,mjs,ts}',
      ],
      env: {
        node: true,
      },
    },
    {
      files: ['*.{content,config,fixture}.*'],
      rules: {
        'max-len': 'off',
        'max-lines': 'off',
        'max-lines-per-function': 'off',
      },
    },
    {
      files: [
        '**/*.snap',
        '**/*.{test,spec,e2e-spec,cy,fixture}.{js,ts,jsx,tsx}',
        '**/__{test,snapshot,mock}__/*.{js,jsx,ts,tsx}',
      ],
      rules: {
        // off
        'max-lines-per-function': 'off',
        'max-lines': 'off',
        'max-statements': 'off',
        'max-statements-per-line': 'off',
        'n/no-callback-literal': 'off',
        'max-nested-callbacks': 'off',
        'max-depth': 'off',

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
    'indent': ['error', INDENT],
    'no-tabs': INDENT === 'tab' ? 'off' : 'error',
    'eol-last': ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'no-trailing-spaces': ['error'],
    'comma-dangle': ['error', 'always-multiline'],
  },
}
