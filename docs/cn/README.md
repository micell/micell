---
home: true
heroImage: /logo.svg
heroText: Micell
tagline: Web 前端开发函数集
actionText: 查看文档 →
actionLink: /docs/
features:
- title: 包罗万象
  details: 包含多种类别，比如字符、字符串、日期、DOM、Cookie、URL 等等。
- title: 支持 TypeScript
  details: 包含充足的 TypeScript 类型定义。
- title: 体积小
  details: 使用 bable-plugin-lodash 来减少打包体积。
footer: MIT 许可证协议 | 版权 © 2019-至今 Alex Chao
---

## Micell 是什么？

Micell（发音为 /maɪˈsel/，类似于 **my-cell**）是一个函数集合，这些函数用于每日的 Web 开发当中。
Micell 只包含那些在大部分项目当中共同使用的函数。当然，为了完整性，也会包含一些不常用的函数。

## Micell 不是什么？

* 不是 lodash、momentjs 或 dayjs 的替代品。
* 不会包含你的应用当中所有的工具函数。

## 为什么需要 Micell？

* **社区共享**：你无需重复写公用的工具函数了，Micell 实现了所有项目的复用。
* **Typescript 支持**：源码使用 TypeScript 书写，同时类型声明文件也包含在 npm 包里面。
* **高可靠性**：经过所有现代浏览器当中测试，测试覆盖率达到 96%。
* **按需引入**：使用 **babel-plugin-lodash** 来实现按需引入模块。

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
<script src="https://cdn.jsdelivr.net/npm/micell@0.13.3/dist/micell.js"></script>
```

ES 模块版本：

```html
<script src="https://cdn.jsdelivr.net/npm/micell@0.13.3/dist/micell.esm.browser.js"></script>
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
