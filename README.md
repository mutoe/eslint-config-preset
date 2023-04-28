# @mutoe/eslint-config-preset

> Import from [@osdoc-dev](https://github.com/osdoc-dev/eslint-config-preset), Thanks.

## Version

### `eslint-config-standard`
[![upstream-standard-version](https://img.shields.io/npm/v/eslint-config-standard?label=upstream&style=flat-square)](https://github.com/standard/eslint-config-standard)
![local-standard-version](https://img.shields.io/badge/local-v17.0.0-blue?style=flat-square)

## Usage

### install package

```bash
npm i -D eslint @mutoe/eslint-config-preset
# or
pnpm add -D eslint @mutoe/eslint-config-preset
```

### use in config js

Config list (choose one):
- `@mutoe/eslint-config-preset-basic` (basic javascript + json + yaml lint rules)
- `@mutoe/eslint-config-preset-ts` (support basic + typescript rules)
- `@mutoe/eslint-config-preset-react` (support typescript + react + accessibility rules)
- `@mutoe/eslint-config-preset-vue` (support typescript + vue rules)
- `@mutoe/eslint-config-preset-jest` (support jest rules)

```javascript .eslintrc.js
module.exports = {
  "extends": [
    "@mutoe/eslint-config-preset-react",
    "@mutoe/eslint-config-preset-jest",
  ]
}
```

or using with typescript advanced rules (need typescript parser)

> This will slow down your lint process in large project. Please use with caution.

```javascript .eslintrc.js
module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./your/tsconfig.json"
  },
  "extends": [
    "@mutoe/eslint-config-preset-ts/with-parser",
    "@mutoe/eslint-config-preset-react"
  ]
}
```

### Configurable rules

```javascript .eslintrc.js
// your .eslintrc.js
// TODO

module.exports = {
    "extends": [
        "@mutoe/eslint-config-preset",
    ]
}

```

## Development

```bash
pnpm link
```

## Release

```bash
pnpm release
```

This will be auto generate CHANGELOG by your commits (via --conventional-commits in lerna) and publish version to npm and git repository.
