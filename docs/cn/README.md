---
home: true
heroImage: /logo.svg
heroText: Micell
tagline: Web 前端开发函数集
actionText: 查看文档 →
actionLink: /docs/
features:
- title: 包罗万象
  details: 包含多种类别，比如字符、字符串、日期、DOM、Cookie 等等。
- title: 支持 TypeScript
  details: 包含充足的 TypeScript 类型定义。
- title: 体积小
  details: 使用 bable-plugin-lodash 来减少打包体积。
footer: MIT 许可证协议 | 版权 © 2019-至今 Alex Chao
---

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
<script src="https://cdn.jsdelivr.net/npm/micell@0.1.0/dist/micell.js"></script>
```

ES 模块版本：

```html
<script src="https://cdn.jsdelivr.net/npm/micell@0.1.0/dist/micell.esm.browser.js"></script>
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

更多函数请查看[文档](/cn/docs/)。

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
