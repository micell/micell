# Upgrading from 0.x to 1.0

1.0 keeps `import micell from 'micell'` and `micell.<module>.<fn>()` working. The changes are in the distribution format and the runtime baseline.

## What changed

### ESM only

1.0 ships ES modules only — no CommonJS and no UMD/IIFE build. `require('micell')` is no longer available; browsers load the bundle through `<script type="module">`.

### No more polyfills

`core-js`, `@babel/runtime` and `@babel/runtime-corejs3` were removed. The bundles target ES2020 and inject no polyfills. IE 11, iOS 10 and Android 5 are no longer supported; the baseline is Chrome 87, Edge 88, Firefox 78 and Safari 13.

### Package layout

| 0.x | 1.0 |
| --- | --- |
| `dist/micell.js` (UMD) | removed |
| `dist/micell.common.js` | removed |
| `dist/micell.esm.js` | `dist/micell.es.js` |
| `dist/micell.esm.browser.js` | removed |
| `lib/**/*.js` | removed |
| `types/index.d.ts` | `dist/types/index.d.ts` |

The package exposes its entries through an `exports` map; deep imports into `micell/lib/...` are gone.

### CDN

```html
<!-- 0.x -->
<script src="https://cdn.jsdelivr.net/npm/micell@0/dist/micell.js"></script>

<!-- 1.0 -->
<script type="module">
  import micell from 'https://cdn.jsdelivr.net/npm/micell@1/dist/micell.es.js'

  micell.randomString(6)
</script>
```

### Per-module imports (new)

```js
import { format } from 'micell/date'
import date from 'micell/date'
```

Available subpaths: `micell/base64`, `micell/char`, `micell/cookie`, `micell/date`, `micell/dom`, `micell/easing`, `micell/emitter`, `micell/lang`, `micell/path`, `micell/qs`, `micell/regex`, `micell/string`, `micell/ua`, `micell/url`.

### Node.js

`engines.node` is `^20.19.0 || >=22.12.0`. This is the toolchain requirement; the library itself mostly relies on browser APIs.

## Migration checklist

1. Replace `import micell from 'micell/lib/base64/encode'` style deep imports with `micell.base64.encode`, or `import { encode } from 'micell/base64'`.
2. Replace `micell/dist/micell.js` CDN references with an import of `dist/micell.es.js` inside `<script type="module">`.
3. If you rely on the old polyfill injection (IE 11), stay on `0.15.x` or add your own polyfills.
4. ESM is the only format; CommonJS consumers must switch to `import` (`require('micell')` is no longer exported).
