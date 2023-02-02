module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: { jsx: true },
  },
  env: {
    'vue/setup-compiler-macros': true,
  },
  extends: [
    '@mutoe/eslint-config-preset-ts',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',

    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
    'vue/no-v-html': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/no-setup-props-destructure': 'off',
  },
  overrides: [
    {
      files: ['*.vue'],
      env: {
        node: false,
        browser: true,
      },
      rules: {
        'no-undef': 'off',
        'func-call-spacing': 'off',
      },
    },
  ],
}
