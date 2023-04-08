module.exports = {
  overrides: [
    {
      files: ['*.{test,spec,e2e-spec}.?(c|m)[tj]s?(x)', '**/*.snap'],
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
        'jest/max-expects': 'off',
        'jest/prefer-to-be': 'off',
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
        'jest/consistent-test-it': 'warn',
        'jest/prefer-each': 'warn',
        'jest/prefer-equality-matcher': 'warn',
        'jest/prefer-called-with': 'warn',
        'jest/prefer-comparison-matcher': 'warn',
        'jest/prefer-mock-promise-shorthand': 'warn',
        'jest/prefer-snapshot-hint': 'warn',
        'jest/prefer-spy-on': 'warn',
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
}
