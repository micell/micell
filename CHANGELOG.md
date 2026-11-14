# Changelog

## 1.0.0

### Breaking changes

- Removed the built-in polyfills (`core-js`, `@babel/runtime`); IE 11, iOS 10 and
  Android 5 are no longer supported. The baseline is Chrome 87+, Edge 88+,
  Firefox 78+ and Safari 13+.
- New package layout: a single `dist/` directory behind an `exports` map.
  Deep imports into `micell/lib/...` and the `types/` tree are gone.
- The root entry no longer has a default export. Import the whole library
  with `import * as micell from 'micell'`, or use a subpath import.
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
- VitePress 2 (Vite 8 / Rolldown) replaces VitePress 1, which pinned Vite 5.
  The docs configs now import their siblings with explicit `.ts` extensions.
- Oxfmt 0.78, tsup 9 and Vite 8 clear every advisory Dependabot reported
  against the dev toolchain; `pnpm-workspace.yaml` additionally pins
  `mdast-util-to-hast >= 13.2.2` and `@bundled-es-modules/cookie > cookie
  >= 0.7.0` past their advisories.
- Dependabot version updates are configured in `.github/dependabot.yml`.
