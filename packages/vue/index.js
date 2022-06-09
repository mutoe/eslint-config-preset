module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {},
    },
  ],
  extends: [
    '@mutoe/eslint-config-preset-ts',
    'plugin:vue/vue3-recommended',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
    'vue/no-v-html': 'warn',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
}
