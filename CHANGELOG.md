# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.1.1](https://github.com/mutoe/eslint-config-preset/compare/v3.1.0...v3.1.1) (2023-04-25)


### Bug Fixes

* fix un-unsafe-* rules to with-parser extends config ([e4751c9](https://github.com/mutoe/eslint-config-preset/commit/e4751c9452dad8f68684df968289847c3450f27c))
* inner dependencies issue ([279eb83](https://github.com/mutoe/eslint-config-preset/commit/279eb83faea01699791a84a1b8598552624b556c))





# [3.1.0](https://github.com/mutoe/eslint-config-preset/compare/v3.0.0...v3.1.0) (2023-04-12)


### Bug Fixes

* add e2e-spec to test files ([8bdb07c](https://github.com/mutoe/eslint-config-preset/commit/8bdb07cb2ea5dafadb2ef6c708b569b98f750db1))
* only match root config files to add node env ([467f1bb](https://github.com/mutoe/eslint-config-preset/commit/467f1bbfde511d37c7eb3893a38d8548fa4b3801))
* suppress unnecessary rules ([dad8096](https://github.com/mutoe/eslint-config-preset/commit/dad8096775b8534ffd4ce3f401e806518e550a60))


### Features

* change un-unsafe-* rules to warn level ([ada5b55](https://github.com/mutoe/eslint-config-preset/commit/ada5b55e58877d367a000b1fb063384015aeac34))





# [3.0.0](https://github.com/mutoe/eslint-config-preset/compare/v2.4.2...v3.0.0) (2023-04-08)


### Features

* [BREAK CHANGE] support import sort ([b619a42](https://github.com/mutoe/eslint-config-preset/commit/b619a42a1b28b82b19f5c13b8a50db63b6dbe99c))





## [2.4.2](https://github.com/mutoe/eslint-config-preset/compare/v2.4.1...v2.4.2) (2023-04-08)


### Bug Fixes

* optimize package.json lint rules ([0969799](https://github.com/mutoe/eslint-config-preset/commit/0969799e595ebe1781e708609f9279f0cbba17b8))





## [2.4.1](https://github.com/mutoe/eslint-config-preset/compare/v2.4.0...v2.4.1) (2023-04-08)


### Bug Fixes

* consider the e2e-spec file as a test file as well ([b5dafd9](https://github.com/mutoe/eslint-config-preset/commit/b5dafd92ae24384526933e7684f8d82b7d3a24c4))





# [2.4.0](https://github.com/mutoe/eslint-config-preset/compare/v2.3.0...v2.4.0) (2023-04-08)


### Bug Fixes

* remove jest peer dependency warning ([4a5b458](https://github.com/mutoe/eslint-config-preset/commit/4a5b4582810ed38927051532102dca699766cd34))


### Features

* upgrade dependencies ([877642b](https://github.com/mutoe/eslint-config-preset/commit/877642b6b4edaa2a28ec40f2aee10795834f4928))





# [2.3.0](https://github.com/mutoe/eslint-config-preset/compare/v2.2.0...v2.3.0) (2023-02-02)


### Bug Fixes

* typescript rules ignore js files ([f62cca5](https://github.com/mutoe/eslint-config-preset/commit/f62cca583c97dab5c19be46f0a8675403786bbb1))
* vue rules with setup sugar ([3f3f2ea](https://github.com/mutoe/eslint-config-preset/commit/3f3f2ea34fa1ba3c0e9a7a4007a70878bf6bc50a))


### Features

* add vue a11y rules ([36231ba](https://github.com/mutoe/eslint-config-preset/commit/36231ba4dfa043464e0b402eb7b2361df2cd9a14))
* ignore common generated files ([184d99e](https://github.com/mutoe/eslint-config-preset/commit/184d99ebc48139a8db76b507f3496849cdc46e07))
* misc update ([c3602bb](https://github.com/mutoe/eslint-config-preset/commit/c3602bbf88149af99404b6228bc8abd17add934d))





# [2.2.0](https://github.com/mutoe/eslint-config-preset/compare/v2.1.2...v2.2.0) (2023-01-29)


### Bug Fixes

* explicit-module-boundary-types not include hooks and function declaration in object ([f6e2dfd](https://github.com/mutoe/eslint-config-preset/commit/f6e2dfd95e5700c1ddfcb2a1998b8f14cd8c8140))


### Features

* allow to declare 'any' type directly ([113e4b3](https://github.com/mutoe/eslint-config-preset/commit/113e4b3b34a2d1321f195a9f0d2bf98b895b5984))





## [2.1.2](https://github.com/mutoe/eslint-config-preset/compare/v2.1.1...v2.1.2) (2022-12-03)


### Bug Fixes

* test file max-lines-per-function rule ([c8754f1](https://github.com/mutoe/eslint-config-preset/commit/c8754f154b28be8b4c5c407eb294e5b82ab57b5a))
* turn off unicorn prefer-ternary and filename-case rules ([163359f](https://github.com/mutoe/eslint-config-preset/commit/163359f73fc939f7d2c4d6cfabf5572ec456a8d4))





## [2.1.1](https://github.com/mutoe/eslint-config-preset/compare/v2.1.0...v2.1.1) (2022-12-02)


### Bug Fixes

* package-json not export to npm ([e3033bf](https://github.com/mutoe/eslint-config-preset/commit/e3033bfe1ec1d92308d181546ca10214142a4984))





# [2.1.0](https://github.com/mutoe/eslint-config-preset/compare/v2.0.3...v2.1.0) (2022-12-02)


### Features

* add bugs to package-json order ([fbbde5d](https://github.com/mutoe/eslint-config-preset/commit/fbbde5dca0c87106cfda808bf803c8018cf5719d))
* add changelog property to package json ([60187cf](https://github.com/mutoe/eslint-config-preset/commit/60187cff87129795569d2347288d8a40ce0d00d8))
* add publishConfig to package-json order ([988bc3e](https://github.com/mutoe/eslint-config-preset/commit/988bc3eb14097a75dcdbcabec51e4450bde474b2))
* change operator-linebreak to before ([43352da](https://github.com/mutoe/eslint-config-preset/commit/43352dacaae82e05ed7c0a5a16edb21085c9fdde))
* split jest package ([521ca14](https://github.com/mutoe/eslint-config-preset/commit/521ca1411ba8543c7f0ba20633842b551af6db96))





## [2.0.3](https://github.com/mutoe/eslint-config-preset/compare/v2.0.2...v2.0.3) (2022-11-07)


### Features

* add more package properties order ([d934c12](https://github.com/mutoe/eslint-config-preset/commit/d934c12c76b73e5e4d889e071b770131ad96fba8))





## [2.0.2](https://github.com/mutoe/eslint-config-preset/compare/v2.0.1...v2.0.2) (2022-11-07)


### Bug Fixes

* git hook name ([fa7b922](https://github.com/mutoe/eslint-config-preset/commit/fa7b922173e063aec7e46916e0ca423501ff9983))





## [2.0.1](https://github.com/mutoe/eslint-config-preset/compare/v2.0.0...v2.0.1) (2022-11-07)


### Features

* add more git hooks order ([81c0852](https://github.com/mutoe/eslint-config-preset/commit/81c08526875f39935bfaa6bafee22ff28e8e4488))





# [2.0.0](https://github.com/mutoe/eslint-config-preset/compare/v2.0.0-alpha.6...v2.0.0) (2022-11-04)


### Features

* update some rules ([4c627d7](https://github.com/mutoe/eslint-config-preset/commit/4c627d7c655ccd666fbb9b07005ec607e02cea94))





# [2.0.0-alpha.6](https://github.com/mutoe/eslint-config-preset/compare/v2.0.0-alpha.5...v2.0.0-alpha.6) (2022-10-31)


### Bug Fixes

* revert mistake delete unicorn ([0d9aad3](https://github.com/mutoe/eslint-config-preset/commit/0d9aad3cd77dd4db3d65db0b270f36d268c5f928))





# [2.0.0-alpha.5](https://github.com/mutoe/eslint-config-preset/compare/v2.0.0-alpha.4...v2.0.0-alpha.5) (2022-10-31)


### Features

* prefer-const destructuring set to all ([7eb5979](https://github.com/mutoe/eslint-config-preset/commit/7eb59793c56370fbfc623a3ac053d29b31ea41d7))
* remove eslint-comment relative rules ([6e1a9dd](https://github.com/mutoe/eslint-config-preset/commit/6e1a9dd8df3fc2d4da88b637d89dda71817f200d))





# [2.0.0-alpha.4](https://github.com/mutoe/eslint-config-preset/compare/v2.0.0-alpha.3...v2.0.0-alpha.4) (2022-10-27)


### Bug Fixes

* man-lines etc. should not apply for non-js files ([e791d71](https://github.com/mutoe/eslint-config-preset/commit/e791d711498328a9dcb126db91bf724071e18f1b))


### Features

* add basic rules for all files ([1e7116c](https://github.com/mutoe/eslint-config-preset/commit/1e7116c41d403b25068e1d10fe41a116afde5b9c))





# [2.0.0-alpha.3](https://github.com/mutoe/eslint-config-preset/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2022-10-26)


### Bug Fixes

* eslintrc module.export should not display warning ([da28705](https://github.com/mutoe/eslint-config-preset/commit/da287059484b4f18225101b5e5a1d97d0e64b630))
* json parser conflict with typescript parser ([4502870](https://github.com/mutoe/eslint-config-preset/commit/4502870b91eaa0ece1933f71a5eb3bcb4d8f0d36))





# [2.0.0-alpha.2](https://github.com/mutoe/eslint-config-preset/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2022-10-26)

**Note:** Version bump only for package @mutoe/eslint-config-preset





# [2.0.0-alpha.1](https://github.com/mutoe/eslint-config-preset/compare/v2.0.0-alpha.0...v2.0.0-alpha.1) (2022-10-26)


### Features

* add jest config ([d3615e1](https://github.com/mutoe/eslint-config-preset/commit/d3615e156d123c66f790ca24427894cbc8a52407))
* cleanup config of unicorn ([9e2a1d4](https://github.com/mutoe/eslint-config-preset/commit/9e2a1d445fc35a14621b9f7860cee362398881a6))
* ignore rest args any declaration ([c6a1bbf](https://github.com/mutoe/eslint-config-preset/commit/c6a1bbff961c3fa6135df4502aade7310e2060af))
* ignore return type declaration in tests ([a3c7ffc](https://github.com/mutoe/eslint-config-preset/commit/a3c7ffcb112b75867880b97f0b0dc83051e2f85e))





# [2.0.0-alpha.0](https://github.com/mutoe/eslint-config-preset/compare/v1.4.0...v2.0.0-alpha.0) (2022-10-23)


### Features

* add unicorn recommended rules in basic rules ([253a2df](https://github.com/mutoe/eslint-config-preset/commit/253a2dfb53968898c5e8c73bf1259ace1f222050))


### BREAKING CHANGES

* eslint config `plugin:unicorn/recommended` imported





# [1.4.0](https://github.com/mutoe/eslint-config-preset/compare/v1.3.2...v1.4.0) (2022-06-11)


### Features

* support cypress as test rule ([9b9b09e](https://github.com/mutoe/eslint-config-preset/commit/9b9b09e5e68f0c18c01e15dcbf5dd579176f6829))





## [1.3.2](https://github.com/mutoe/eslint-config-preset/compare/v1.3.1...v1.3.2) (2022-06-09)


### Bug Fixes

* disable max-statements check in test files ([b1de5a2](https://github.com/mutoe/eslint-config-preset/commit/b1de5a2d543522cab8d420a15575119d0e693e54))





## [1.3.1](https://github.com/mutoe/eslint-config-preset/compare/v1.3.0...v1.3.1) (2022-06-09)


### Bug Fixes

* vue no-unused-vars rule issue ([525b000](https://github.com/mutoe/eslint-config-preset/commit/525b000a9fd1ca7e5a93afadc84f3a0fc6bb08f2))





# [1.3.0](https://github.com/mutoe/eslint-config-preset/compare/v1.2.3...v1.3.0) (2022-06-08)


### Features

* ignore any check in test files ([9c3d320](https://github.com/mutoe/eslint-config-preset/commit/9c3d320eeb39083548cf256e6830f5383c70825f))
* make inline type declaration delimiter to comma style ([582987d](https://github.com/mutoe/eslint-config-preset/commit/582987dda0086e61eda36806fc815f3baccdf436))
* support vue rules ([787698d](https://github.com/mutoe/eslint-config-preset/commit/787698d16d08e421c7488c495df3c2a54a68ff58))
* update explicit-module-boundary-type rule ([f530b4a](https://github.com/mutoe/eslint-config-preset/commit/f530b4a530692513802094ab6891242c4a7178b2))





## [1.2.3](https://github.com/mutoe/eslint-config-preset/compare/v1.2.2...v1.2.3) (2022-06-08)


### Bug Fixes

* override rule for test files glob mismatch issue ([e22f531](https://github.com/mutoe/eslint-config-preset/commit/e22f531354c41667de86a4c2b0ef0ae7c91b424b))





## [1.2.2](https://github.com/mutoe/eslint-config-preset/compare/v1.2.1...v1.2.2) (2022-06-07)


### Bug Fixes

* override rule for test files glob mismatch issue ([9622e21](https://github.com/mutoe/eslint-config-preset/commit/9622e21ebe3d6a50eef293da03732b641fbfebde))





## [1.2.1](https://github.com/mutoe/eslint-config-preset/compare/v1.2.0...v1.2.1) (2022-06-07)

**Note:** Version bump only for package @mutoe/eslint-config-preset





# [1.2.0](https://github.com/mutoe/eslint-config-preset/compare/v1.1.2...v1.2.0) (2022-06-06)


### Bug Fixes

* remove --yes option from release script ([367c0b4](https://github.com/mutoe/eslint-config-preset/commit/367c0b4e2b3fb88a775c191a87d16e6885116e6e))


### Features

* add 'unstable_' prefix in camelcase rule ([7f6b4e5](https://github.com/mutoe/eslint-config-preset/commit/7f6b4e5d8631b6ee0ce0c81a0d7e055b47498ca9))





## 1.1.1 (2022-05-16)


### Bug Fixes

* not expose with-parser file issue ([b4512fa](https://github.com/mutoe/eslint-config-preset/commit/b4512fa19b3e66c5890cf3e71f1e74bfc3309958))





## 1.0.1 (2022-05-16)

**Note:** Version bump only for package @mutoe/eslint-config-preset





## 0.5.3 (2022-04-15)

**Note:** Version bump only for package @mutoe/eslint-config-preset





## 0.5.2 (2021-12-29)

**Note:** Version bump only for package @mutoe/eslint-config-preset





## 0.4.2 (2021-12-29)

**Note:** Version bump only for package @mutoe/eslint-config-preset





## 0.4.1 (2021-12-29)

**Note:** Version bump only for package @mutoe/eslint-config-preset





# 0.4.0 (2021-07-15)


### Features

* update lock ([7b51898](https://github.com/osdoc-dev/eslint-config-preset/commit/7b51898e1bb1786ee68af5ed5950eeeb5f47972a))





## 0.3.5 (2021-07-15)


### Bug Fixes

* fix bugs ([1839144](https://github.com/osdoc-dev/eslint-config-preset/commit/1839144a7abbac93e3d250087f4cb1e70eeb1ae5))





## 0.3.4 (2021-07-15)


### Bug Fixes

* fix eslint-visitor-keys version ([8176cf1](https://github.com/osdoc-dev/eslint-config-preset/commit/8176cf19f8ebbfd5de6f700c0cb9630ad46346eb))





## 0.3.3 (2021-07-15)


### Bug Fixes

* fix jsonc-eslint-parser version to v1.0.0 ([9cc810b](https://github.com/osdoc-dev/eslint-config-preset/commit/9cc810b90d18e2ead2b160ccf20a447dd8b43b84))





## 0.3.2 (2021-07-14)


### Bug Fixes

* fix jsonc-eslint-parser version ([07731f5](https://github.com/osdoc-dev/eslint-config-preset/commit/07731f5341149ce25dd45f3138bebb03908b79ee))





## 0.3.1 (2021-07-08)


### Bug Fixes

* fix commit ([7f613f0](https://github.com/osdoc-dev/eslint-config-preset/commit/7f613f05f75b873b4eb12fd578c120064eb45a43))





# [0.3.0](https://github.com/osdoc-dev/lint-preset/compare/v0.2.3...v0.3.0) (2021-07-08)

### Features

- update basic ([90851f1](https://github.com/osdoc-dev/lint-preset/commit/90851f16975bf768d2289bfc919c23fe9ad01470))

## 0.2.3 (2021-03-31)

### Bug Fixes

- style prettier ([89e7eed](https://github.com/osdoc-dev/eslint-config-preset/commit/89e7eed80559fb4e122c5c88d84cd0e0a5558c0a))

## 0.2.2 (2021-03-31)

### Bug Fixes

- basic add jsx-a11y ([faec840](https://github.com/osdoc-dev/eslint-config-preset/commit/faec840a667768c0b1454ca9e3d2d396a7d9fc4c))

## 0.2.1 (2021-03-29)

**Note:** Version bump only for package @osdoc-dev/eslint-config-preset

# 0.2.0 (2021-03-26)

### Features

- eslint-plugin-jsx-a11y ([de7be04](https://github.com/osdoc-dev/eslint-config-preset/commit/de7be041543b74212d79326b1458edf8311442c5))

## 0.1.1 (2021-03-26)

### Bug Fixes

- version ([e5625dd](https://github.com/osdoc-dev/eslint-config-preset/commit/e5625dd4bf32ad914ea117ff6d81789410d91f43))

# 0.1.0 (2021-03-26)

### Features

- update rules ([0c6f9cd](https://github.com/osdoc-dev/eslint-config-preset/commit/0c6f9cd077210d361ada4dff0604b289fa15a8ae))

## 0.0.13 (2021-03-26)

### Bug Fixes

- fix unicorn/expiring-todo-comments rules ([8ab5532](https://github.com/osdoc-dev/eslint-config-preset/commit/8ab553281a0e62b3e930b57b20a331e077f986df))

## 0.0.12 (2021-03-26)

### Bug Fixes

- remove ts ([dc1f40d](https://github.com/osdoc-dev/eslint-config-preset/commit/dc1f40d2c2f187b337cfe00b25583bf54f6c0416))

## 0.0.11 (2021-03-26)

### Bug Fixes

- unicorn version ([1ae1458](https://github.com/osdoc-dev/eslint-config-preset/commit/1ae14589e57881e13266e66513ee824293518480))

## 0.0.10 (2021-03-25)

### Bug Fixes

- unicorn error ([44d7f98](https://github.com/osdoc-dev/eslint-config-preset/commit/44d7f9867a0e25e2e91a15eb6487dde1e8fab101))

## 0.0.9 (2021-03-25)

### Bug Fixes

- fix yml plugin ([b53687b](https://github.com/osdoc-dev/eslint-config-preset/commit/b53687be8ff92c3a24fb62f76473245e8ada40a3))

## 0.0.8 (2021-03-25)

**Note:** Version bump only for package @osdoc-dev/eslint-config-preset

## 0.0.7 (2021-03-25)

**Note:** Version bump only for package @osdoc-dev/eslint-config-preset

## 0.0.6 (2021-03-25)

**Note:** Version bump only for package @osdoc-dev/eslint-config-preset

## 0.0.5 (2021-03-25)

**Note:** Version bump only for package @osdoc-dev/eslint-config-preset

## 0.0.4 (2021-03-25)

**Note:** Version bump only for package @osdoc-dev/eslint-config-preset

## 0.0.3 (2021-03-25)

**Note:** Version bump only for package @osdoc-dev/eslint-config-preset

## [0.0.2](https://github.com/osdoc-dev/lint-preset/compare/v0.3.0...v0.0.2) (2021-03-19)

**Note:** Version bump only for package @osdoc-dev/eslint-config-preset
