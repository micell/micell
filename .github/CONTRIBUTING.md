# Contributing to micell

We're open to and grateful for contributions made by the community. By contributing to micell, you agree to abide by the [code of conduct](CODE_OF_CONDUCT.md).

### What you can do?

* Open an issue to give us a feedback for some bug.
* Fix a typo.
* Improve the document.
* Request a feature.
* Or anything you think it is valuable to the micell community.

### Code style

* **2 spaces indention**
* **Line end without semicolon**
* **Single quotes**
* Format and lint run in the pre-commit hook (`oxfmt` + `oxlint`).

### Prerequisite

* Node.js `^20.19.0 || >=22.12.0`
* pnpm >= 10

### Project structure

* **docs**: Document files written in markdown, generated with VitePress.
* **scripts**: Release scripts.
* **src**: Source code.
* **src/entries**: Per-module subpath entries (`micell/date`, `micell/string`, …);
  regenerate them when a module's default export changes.
* **test**: Test files, run in a real Chromium via Vitest browser mode.

### Commands

```sh
# Install dependencies
pnpm install

# Install the Playwright browser once
pnpm exec playwright install chromium

# Type check
pnpm type-check

# Lint and format
pnpm lint
pnpm fmt:check

# Tests (headless Chromium)
pnpm test:ci

# Tests with coverage
pnpm test:ci:cover

# Build ESM/CJS/IIFE bundles and the declaration file
pnpm build

# Local docs server
pnpm docs:dev

# Build the docs site
pnpm docs:build
```

### Git commit message

We use [Conventional Commits](https://www.conventionalcommits.org/). The type and
scope drive the generated `CHANGELOG.md`, so describe what a package consumer
can observe. For example:

```txt
fix: toggle the if check
fix(url): fix the missing of default (#42)
feat(ua): add isIE method
```

### Releasing

```sh
# Bump the version, regenerate CHANGELOG.md, open a release PR
pnpm release

# After the PR is merged, tag the merge commit on main
pnpm release:tag
```
