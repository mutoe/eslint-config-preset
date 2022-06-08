module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      rules: {},
    },
  ],
  extends: [
    '@vue/eslint-config-typescript/recommended',
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
