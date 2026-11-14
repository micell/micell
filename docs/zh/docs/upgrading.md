# 从 0.x 升级到 1.0

1.0 保留 `import micell from 'micell'` 与 `micell.<module>.<fn>()` 的用法，变化集中在分发形态和运行环境要求上。

## 主要变化

### 只发布 ESM

1.0 只提供 ES module 产物，不再发布 CommonJS 与 UMD/IIFE 版本。`require('micell')` 不再可用，浏览器中需通过 `<script type="module">` 导入。

### 不再注入 polyfill

移除了 `core-js`、`@babel/runtime` 与 `@babel/runtime-corejs3`，构建产物面向 ES2020，不再内置 polyfill。IE 11、iOS 10、Android 5 不再支持，最低版本为 Chrome 87、Edge 88、Firefox 78、Safari 13。

### 包结构

| 0.x | 1.0 |
| --- | --- |
| `dist/micell.js`（UMD） | 移除 |
| `dist/micell.common.js` | 移除 |
| `dist/micell.esm.js` | `dist/micell.es.js` |
| `dist/micell.esm.browser.js` | 移除 |
| `lib/**/*.js` | 移除 |
| `types/index.d.ts` | `dist/types/index.d.ts` |

包通过 `exports` 映射暴露入口，`micell/lib/...` 深导入不再可用。

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

### 按模块引入（新增）

```js
import { format } from 'micell/date'
import date from 'micell/date'
```

可用子路径：`micell/base64`、`micell/char`、`micell/cookie`、`micell/date`、`micell/dom`、`micell/easing`、`micell/emitter`、`micell/lang`、`micell/path`、`micell/qs`、`micell/regex`、`micell/string`、`micell/ua`、`micell/url`。

### Node.js

`engines.node` 为 `^20.19.0 || >=22.12.0`，这是构建工具链的要求；库本身主要依赖浏览器 API。

## 迁移清单

1. 把 `import micell from 'micell/lib/base64/encode'` 这类深导入改为 `micell.base64.encode`，或 `import { encode } from 'micell/base64'`。
2. 把 CDN 的 `dist/micell.js` 改为在 `<script type="module">` 中导入 `dist/micell.es.js`。
3. 如果依赖旧的 polyfill 注入（IE 11），继续使用 `0.15.x` 或自行引入 polyfill。
4. 仅支持 ESM，CommonJS 使用者需改用 `import`（`require('micell')` 不再可用）。
