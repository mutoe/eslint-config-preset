/** Basic config */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    '@mutoe/eslint-config-preset-standard',
    'plugin:eslint-comments/recommended',
    'plugin:unicorn/recommended',
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
      files: ['package.json'],
      rules: {
        'jsonc/sort-keys': [
          'warn',
          {
            pathPattern: '^$',
            order: [
              'name',
              'author',
              'version',
              'description',
              'keywords',
              'license',
              'repository',
              'funding',
              'type',
              'files',
              'exports',
              'main',
              'module',
              'unpkg',
              'bin',
              'scripts',
              'husky',
              'lint-staged',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'devDependencies',
              'prettier',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
        ],
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
      rules: {
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        // off
        'eslint-comments/disable-enable-pair': 'off',
        'import/no-unresolved': 'off',
        'prefer-promise-reject-errors': 'off',
        'unicorn/no-null': 'off',
        'unicorn/prefer-top-level-await': 'off',
        'unicorn/prevent-abbreviations': 'off',

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
        'comma-dangle': ['error', 'always-multiline'],
        'import/order': 'error',
        'indent': ['error', 2, { SwitchCase: 1 }],
        'jsx-quotes': ['error', 'prefer-single'],
        'no-extra-parens': ['error', 'all', { conditionalAssign: false, returnAssign: false, nestedBinaryExpressions: false, ignoreJSX: 'multi-line' }],
        'no-var': 'error',
        'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
        'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
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
      files: ['*.{test,spec,cy}.?(c|m)[tj]s?(x)', '**/*.snap'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
      ],
      rules: {
        'max-lines-per-function': 'off',
        'max-lines': 'off',
        'max-depth': ['warn', 10],
        'max-nested-callbacks': ['warn', 5],
        'max-statements': 'off',
        'max-statements-per-line': 'off',

        // off
        'n/no-callback-literal': 'off',
        'prefer-arrow-callback': [
          'error',
          {
            allowNamedFunctions: false,
            allowUnboundThis: true,
          },
        ],

        // error
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-todo': 'error',
        'jest/require-top-level-describe': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/no-duplicate-hooks': 'error',

        // warn
        'jest/max-expects': ['warn', { max: 6 }],
        'jest/consistent-test-it': 'warn',
        'jest/prefer-each': 'warn',
        'jest/prefer-equality-matcher': 'warn',
        'jest/prefer-comparison-matcher': 'warn',
        'jest/prefer-mock-promise-shorthand': 'warn',
        'jest/prefer-snapshot-hint': 'warn',
        'jest/prefer-spy-on': 'warn',
        'jest/prefer-called-with': 'warn',
        'jest/no-conditional-in-test': 'warn',
        'jest/no-restricted-matchers': ['warn', {
          'not.toHaveBeenCalled': '`not.toHaveBeenCalled` are not always correct. Consider that it cannot be called due to a program error.\nYou should assert that what the program did.',
          'not.toBeCalled': '`not.toBeCalled` are not always correct. Consider that it cannot be called due to a program error.\nYou should assert that what the program did.',
          'not.toHaveBeenCalledWith': '`not.toHaveBeenCalledWith` are not always correct. Consider that it cannot be called due to a program error.\nYou should assert that what the program did.',
          'not.toBeCalledWith': '`not.toBeCalledWith` are not always correct. Consider that it cannot be called due to a program error.\nYou should assert that what the program did.',
        }],
        'jest/prefer-lowercase-title': ['warn', {
          ignore: ['describe', 'test'],
          ignoreTopLevelDescribe: true,
          allowedPrefixes: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        }],
        'jest/no-large-snapshots': ['warn', {
          maxSize: 50,
          inlineMaxSize: 10,
        }],
      },
    },
  ],
  rules: {},
}
