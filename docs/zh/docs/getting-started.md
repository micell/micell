# 快速开始

## 安装

**Npm**

```sh
npm i --save micell
```

**Yarn**

```sh
yarn add micell
```

**CDN**

如果你想通过`<script>`标签来直接使用 micell，可以使用 [jsDelivr](https://www.jsdelivr.com/package/npm/micell)。

最新版本：

```html
<script src="https://cdn.jsdelivr.net/npm/micell"></script>
```

指定版本：

```html
<script src="https://cdn.jsdelivr.net/npm/micell@0.15.2/dist/micell.js"></script>
```

ES 模块版本：

```html
<script src="https://cdn.jsdelivr.net/npm/micell@0.15.2/dist/micell.esm.browser.js"></script>
```

micell 同样存在于 [unpkg](https://unpkg.com/) 上。

## 使用

```js
import micell from 'micell'

// 生成一个随机字符串
micell.randomString(6);

// 获取 Cookie 值
micell.cookie.get('name')
```

更多函数请查看[文档](/zh/docs/base64)。

> **小提示**：你可以在浏览器控制台尝试 micell，使用全局对象`micell`。

## 减少打包体积

可以通过 [babel-plugin-lodash](https://www.npmjs.com/package/babel-plugin-lodash) 来实现按需打包。

**.babelrc**

```json
{
  "plugins": [
    ["lodash", { "id": ["micell"] }]
  ]
}
```
