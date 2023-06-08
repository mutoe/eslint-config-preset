module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: { jsx: true },
  },
  extends: [
    '@mutoe/eslint-config-preset-ts',
    'plugin:vue/vue3-recommended',
    'plugin:vuejs-accessibility/recommended',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    'vue/component-tags-order': ['error', {
      order: [
        'template',
        'script:not([setup])',
        'script',
        'style:not([scoped])',
        'style',
        'i18n[local=en]',
        'i18n[local=zh]',
        'i18n',
      ],
    }],

    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/block-spacing': ['error', 'always'],
    'vue/html-comment-content-spacing': ['error', 'always'],
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

        // prevent multiple script block misinformation
        'import/first': 'off',

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
