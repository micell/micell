# Contributing to micell

We're open to and grateful for contributions made by the community. By contributing to micell, you agree to abide by the [code of conduct](CODE_OF_CONDUCT.md).

### What you can do?

* Open an issue to give us a feedback for some bug.
* Fix a typo.
* Improve the document.
* Request a feature.
* Or anything you think it is valuable to the micell community.

### Code style

In short, that is the below.

* **2 spaces indention**
* **Line end without semicolon**
* **No trailing comma**

And, lint script will be run in git commit automatically.

### Prerequisite

* Node.js
* Yarn

### Test

```sh
# Local test with headless chrome
yarn test
```
### Document

```sh
# Local docs server with vuepress
yarn docs:dev
```

### Git commit message

We use the style of [conventional-changelog-angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular). For example:

```txt
fix: toggle the if check
fix(url): fix the missing of default (#42)
feat(ua): add isIE method
```

### Releasing

```sh
# CI environment
yarn run release

# Local machine
yarn run release --no-ci
```
