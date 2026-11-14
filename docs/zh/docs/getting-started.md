# 快速开始

## 安装

**Npm**

```sh
npm i --save micell
```

**Pnpm**

```sh
pnpm add micell
```

**Yarn**

```sh
yarn add micell
```

**CDN**

如果你想通过`<script>`标签来直接使用 micell，可以使用 [jsDelivr](https://www.jsdelivr.com/package/npm/micell)。

最新版本：

```html
<script type="module">
  import * as micell from 'https://cdn.jsdelivr.net/npm/micell@1/dist/micell.es.js'

  micell.randomString(6)
</script>
```

指定版本：

```html
<script type="module">
  import * as micell from 'https://cdn.jsdelivr.net/npm/micell@1.0.0/dist/micell.es.js'
</script>
```

micell 同样存在于 [unpkg](https://unpkg.com/) 上。

## 使用

```js
import * as micell from 'micell'

// 生成一个随机字符串
micell.randomString(6);

// 获取 Cookie 值
micell.cookie.get('name')
```

更多函数请查看[文档](/zh/docs/base64)。

## 按需引入

除了整包引入，也可以只引入单个模块（ESM）：

```js
// 只打包 date 模块及其依赖
import { format, parse } from 'micell/date'

// 或取模块命名空间
import date from 'micell/date'
```

可用子路径：`micell/base64`、`micell/char`、`micell/cookie`、`micell/date`、
`micell/dom`、`micell/easing`、`micell/emitter`、`micell/lang`、`micell/path`、
`micell/qs`、`micell/regex`、`micell/string`、`micell/ua`、`micell/url`。

> **小提示**：你可以在浏览器控制台尝试 micell，使用全局对象`micell`。

## 减少打包体积

包只提供 ESM 格式，声明了 `"sideEffects": false`，未引用时可被打包器完全剔除。
库本身无运行时依赖，1.0 起也不再注入 polyfill。
