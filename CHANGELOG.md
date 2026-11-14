# Changelog

## 1.0.0

### Breaking changes

- Removed the built-in polyfills (`core-js`, `@babel/runtime`); IE 11, iOS 10 and
  Android 5 are no longer supported. The baseline is Chrome 87+, Edge 88+,
  Firefox 78+ and Safari 13+.
- New package layout: a single `dist/` directory behind an `exports` map.
  Deep imports into `micell/lib/...` and the `types/` tree are gone.
- ESM-only distribution: the CommonJS (`dist/micell.common.js`) and UMD
  (`dist/micell.js`) bundles were removed. Use `import` or
  `<script type="module">`; `require('micell')` is no longer exported.
- `engines.node` is `^20.19.0 || >=22.12.0`.

### Features

- Per-module imports: `micell/base64`, `micell/char`, `micell/cookie`,
  `micell/date`, `micell/dom`, `micell/easing`, `micell/emitter`,
  `micell/lang`, `micell/path`, `micell/qs`, `micell/regex`, `micell/string`,
  `micell/ua` and `micell/url`, each with named exports and a default module
  object.
- `lang.getType`, `lang.isBigInt`, `lang.isSymbol` and `ua.isAlipay` are now
  exported from the root entry.
- ESM bundles only: a root entry, the per-module subpath entries, and
  declarations for both. Browser consumers load the root bundle with
  `<script type="module">`.

### Fixes

- Importing the package in Node.js no longer crashes inside `domReady` when
  `document` is unavailable.

### Tooling

- tsup (esbuild) replaces Babel + Rollup.
- Oxlint + Oxfmt replace Biome.
- Vitest 4 with the Playwright provider and v8 coverage.
- bumpp + changelogen replace semantic-release.
