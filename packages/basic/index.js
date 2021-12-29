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
    // 'plugin:unicorn/recommended',
  ],
  plugins: ['html'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
    },
  },
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser'
    },
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        quotes: ['error', 'double'],
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
      files: ['*.test.*', '*.spec.*'],
      rules: {
        'prefer-arrow-callback': [
          'error',
          {
            allowNamedFunctions: false,
            allowUnboundThis: true,
          },
        ],
      }
    }
  ],
  rules: {
    // import
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',

    // Common
    semi: ['error', 'never'],
    curly: ['error', 'multi-or-nest', 'consistent'],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    'no-unused-vars': 'warn',
    'no-param-reassign': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': 0,
    'block-spacing': ['error', 'always'],
    camelcase: 'off',
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'comma-dangle': 0,
    'no-constant-condition': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-cond-assign': ['error', 'always'],
    'func-call-spacing': ['off', 'never'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    indent: 0,
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-await-in-loop': 0,
    'no-spaced-func': 'error',
    'object-curly-spacing': ['error', 'always'],
    'no-return-await': 'off',
    'space-before-function-paren': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    // es6
    'no-var': 'error',
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
    'template-curly-spacing': 'error',
    'arrow-parens': 0,
    'generator-star-spacing': 'off',

    // best-practice
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'off',
    complexity: ['off', 11],
    eqeqeq: ['error', 'allow-null'],
    'no-alert': 'warn',
    'no-case-declarations': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-with': 'error',
    'no-void': 'error',
    'no-useless-escape': 'off',
    'vars-on-top': 'error',
    'require-await': 'off',
    'no-return-assign': 'off',

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
    // 'unicorn/no-array-for-each': 0,
    // 'unicorn/no-process-exit': 0,
    // 'unicorn/no-null': 0,
    // 'unicorn/prevent-abbreviations': 0,

    'no-use-before-define': 0,
    'eslint-comments/disable-enable-pair': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'operator-linebreak': 0,
    'no-unused-expressions': 0,
  },
}
