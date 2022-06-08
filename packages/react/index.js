module.exports = {
  extends: [
    '@mutoe/eslint-config-preset-ts',
    'plugin:react/recommended',
  ],
  plugins: [
    'react-hooks',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/no-danger': 'off',
    'react/display-name': 'off',
    'react/no-children-prop': 'off',
    'react/prop-types': 'off',

    'react/jsx-curly-newline': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-pascal-case': 'error',
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'react/self-closing-comp': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'ignore',
        assignment: 'ignore',
        return: 'ignore',
        arrow: 'ignore',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',

    'react-hooks/rules-of-hooks': 'error',
  },
  overrides: [
    {
      files: ['**/*.{js,jsx,tsx}'],
      rules: {
        'max-lines': ['warn', 500],
        'max-lines-per-function': ['warn', 300],
      },
    },
    {
      files: ['**/!(*.test|*.spec).{js,jsx,tsx}'],
      rules: {
        'import/prefer-default-export': 'error',
      },
    },
    {
      files: ['**/!(*.test|*.spec).{js,jsx,tsx}'],
      extends: [
        'plugin:jsx-a11y/recommended',
      ],
      rules: {
        'jsx-a11y/interactive-supports-focus': 'warn',
        'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/no-static-element-interactions': 'warn',
      },
    },
  ],
}
