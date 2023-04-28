const { existsSync } = require('node:fs')
const { join } = require('node:path')
const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.json'

if (!existsSync(join(process.cwd(), tsconfig))) {
  throw new Error('`tsconfig.json` does not exist. You can use `process.env.ESLINT_TSCONFIG` set your tsconfig file')
}

module.exports = {
  extends: ['@mutoe/eslint-config-preset-ts'],
  parserOptions: {
    tsconfigRootDir: process.cwd(),
    project: [tsconfig],
  },
  overrides: [
    {
      files: ['*.ts?(x)'],
      extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
      rules: {
        '@typescript-eslint/promise-function-async': 'error',

        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'warn',
      },
    },
    {
      files: [
        '**/*.snap',
        '**/*.{test,spec,e2e-spec,cy,fixture}.{js,ts,jsx,tsx}',
        '**/__{test,snapshot,mock}__/*.{js,jsx,ts,tsx}',
      ],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
}
