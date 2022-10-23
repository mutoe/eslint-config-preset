/** Basic config */
module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    '@mutoe/eslint-config-preset-standard',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/recommended',
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
    },
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'semi': ['error', 'never'],
        'quotes': ['error', 'double'],
        'quote-props': ['error', 'always'],
        'comma-dangle': ['error', 'never'],
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
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
      files: ['**/*.{test,spec,cy}.?(c|m)[tj]s?(x)'],
      rules: {
        'prefer-arrow-callback': [
          'error',
          {
            allowNamedFunctions: false,
            allowUnboundThis: true,
          },
        ],
        'max-lines-per-function': 'off',
        'max-lines': 'off',
        'max-depth': ['warn', 10],
        'max-nested-callbacks': ['warn', 5],
        'max-statements': 'off',
        'max-statements-per-line': ['warn', { max: 1 }],
      },
    },
  ],
  rules: {
    // Warning
    'no-unused-vars': 'warn',
    'no-alert': 'warn',

    'complexity': ['warn', 10],
    'max-lines-per-function': ['warn', 100],
    'max-lines': ['warn', 300],
    'max-depth': ['warn', 10],
    'max-nested-callbacks': ['warn', 3],
    'max-statements': ['warn', 20],
    'max-statements-per-line': ['warn', { max: 1 }],

    // Off
    'import/no-unresolved': 'off',
    'eslint-comments/disable-enable-pair': 'off',
    'prefer-promise-reject-errors': 'off',

    'import/order': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'camelcase': ['error', {
      allow: ['^UNSAFE_', '^unstable_'],
      properties: 'never',
      ignoreGlobals: true,
    }],
    'quote-props': ['error', 'consistent-as-needed'],
    'indent': ['error', 2, { SwitchCase: 1 }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-var': 'error',
    'no-extra-parens': ['error', 'all', {
      conditionalAssign: false,
      returnAssign: false,
      nestedBinaryExpressions: false,
      ignoreJSX: 'multi-line',
    }],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'block-scoped-var': 'error',
    'jsx-quotes': ['error', 'prefer-single'],

    // // unicorns
    // // Pass error message when throwing errors
    // 'unicorn/error-message': 'error',
    // // Uppercase regex escapes
    // 'unicorn/escape-case': 'error',
    // // Array.isArray instead of instanceof
    // 'unicorn/no-array-instanceof': 'error',
    // // Prevent deprecated `new Buffer()`
    // 'unicorn/no-new-buffer': 'error',
    // // Keep regex literals safe!
    // 'unicorn/no-unsafe-regex': 'off',
    // // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
    // 'unicorn/number-literal-case': 'error',
    // // ** instead of Math.pow()
    // 'unicorn/prefer-exponentiation-operator': 'error',
    // // includes over indexOf when checking for existence
    // 'unicorn/prefer-includes': 'error',
    // // String methods startsWith/endsWith instead of more complicated stuff
    // 'unicorn/prefer-starts-ends-with': 'error',
    // // textContent instead of innerText
    // 'unicorn/prefer-text-content': 'error',
    // // Enforce throwing type error when throwing error while checking typeof
    // 'unicorn/prefer-type-error': 'error',
    // // Use new when throwing error
    // 'unicorn/throw-new-error': 'error',
    // 'unicorn/expiring-todo-comments': 'off',
    // 'unicorn/no-array-for-each': 'off',
    // 'unicorn/no-process-exit': 'off',
    // 'unicorn/no-null': 'off',
    // 'unicorn/prevent-abbreviations': 'off',
  },
}
