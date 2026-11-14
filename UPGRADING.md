# Upgrading to 1.0

micell 1.0 keeps the module layout: `import * as micell from 'micell'` and
`micell.<module>.<fn>()` work as before. The root entry no longer has a
default export, so `import micell from 'micell'` must become the namespace
import above (or a subpath import). The release modernizes the toolchain and
the distribution format, and drops the legacy browser/polyfill support.

## What changed

### Per-module imports

Each module is published as its own ES bundle and exposed through the `exports`
map, so a single module can be imported without the rest of the library:

```js
import { format } from 'micell/date'
import date from 'micell/date'
```

Available subpaths: `base64`, `char`, `cookie`, `date`, `dom`, `easing`,
`emitter`, `lang`, `path`, `qs`, `regex`, `string`, `ua`, `url`. All entries
are ESM-only.

### No runtime dependencies

`core-js`, `@babel/runtime` and `@babel/runtime-corejs3` are gone. The bundles
target ES2020 and contain no polyfills — the host environment must provide the
APIs listed under "Browser support" below.

### Package layout

1.0 ships ESM only — there is no CommonJS or IIFE build.

| Before (0.x) | After (1.0) |
| --- | --- |
| `dist/micell.js` (UMD) | removed |
| `dist/micell.common.js` | removed |
| `dist/micell.esm.js` | `dist/micell.es.js` |
| `dist/micell.esm.browser.js` | removed |
| `lib/**/*.js` | removed |
| `types/index.d.ts` | `dist/micell.d.ts` (entry + shared chunks) |

`package.json` now uses an `exports` map:

```json
{
  "types": "./dist/micell.d.ts",
  "import": "./dist/micell.es.js"
}
```

Deep imports into `micell/lib/...` are gone. Use the top-level entry.

### CDN

Load the ES module directly from a CDN:

```html
<!-- 0.x -->
<script src="https://cdn.jsdelivr.net/npm/micell@0/dist/micell.js"></script>

<!-- 1.0 -->
<script type="module">
  import * as micell from 'https://cdn.jsdelivr.net/npm/micell@1/dist/micell.es.js'

  micell.randomString(6)
  micell.cookie.get('name')
</script>
```

### Browser support

IE 11, iOS 10 and Android 5 are no longer supported. The baseline is:

- Chrome 87+
- Edge 88+
- Firefox 78+
- Safari 13+

### Node.js

`engines.node` is `^20.19.0 || >=22.12.0`. This is the requirement of the build
toolchain (tsup / vite / vitest), not of the library at runtime — micell is a
browser library and mostly relies on DOM APIs.

### Toolchain

| Area | Before | After |
| --- | --- | --- |
| Build | Babel + Rollup | tsup (esbuild) |
| Types | `tsc` per-file to `types/` | tsup dts (shared chunks) |
| Lint / format | Biome | Oxlint + Oxfmt |
| Tests | Vitest 2 (istanbul) | Vitest 4 (v8 coverage) |
| Release | semantic-release | bumpp + changelogen |

### Migration checklist

1. Replace `import micell from 'micell/lib/base64/encode'` style deep imports
   with `micell.base64.encode`, or import the module directly:
   `import { encode } from 'micell/base64'`.
2. Replace `micell/dist/micell.js` CDN references with an ESM import of
   `micell/dist/micell.es.js` inside `<script type="module">`.
3. If you rely on the old polyfill injection (IE 11), stay on `0.15.x` or add
   your own polyfills.
4. CommonJS consumers must switch to ESM (`import`); the `require()` entry is
   no longer exported.
