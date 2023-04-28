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
    'plugin:vuejs-accessibility/recommended',
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

        // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/dfc5d3433a8608edea9862e15f680ab9c9174e94/src/configs/recommended.ts#L14
        'vuejs-accessibility/alt-text': 'warn',
        'vuejs-accessibility/anchor-has-content': 'warn',
        'vuejs-accessibility/aria-props': 'warn',
        'vuejs-accessibility/aria-role': 'warn',
        'vuejs-accessibility/aria-unsupported-elements': 'warn',
        'vuejs-accessibility/click-events-have-key-events': 'warn',
        'vuejs-accessibility/form-control-has-label': 'warn',
        'vuejs-accessibility/heading-has-content': 'warn',
        'vuejs-accessibility/iframe-has-title': 'warn',
        'vuejs-accessibility/interactive-supports-focus': 'warn',
        'vuejs-accessibility/label-has-for': 'warn',
        'vuejs-accessibility/media-has-caption': 'warn',
        'vuejs-accessibility/mouse-events-have-key-events': 'warn',
        'vuejs-accessibility/no-access-key': 'warn',
        'vuejs-accessibility/no-autofocus': 'warn',
        'vuejs-accessibility/no-distracting-elements': 'warn',
        'vuejs-accessibility/no-onchange': 'warn',
        'vuejs-accessibility/no-redundant-roles': 'warn',
        'vuejs-accessibility/no-static-element-interactions': 'warn',
        'vuejs-accessibility/role-has-required-aria-props': 'warn',
        'vuejs-accessibility/tabindex-no-positive': 'warn',
      },
    },
  ],
}
