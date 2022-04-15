module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
      rules: {
        // useless rules when 'vue/script-setup-uses-vars' is enabled
        // 'no-unused-vars': 'off',
        // '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  extends: [
    '@mutoe/eslint-config-preset-ts',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'vue/script-setup-uses-vars': 'error',
  },
}
