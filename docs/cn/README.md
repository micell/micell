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
- title: 恰到好处
  details: 精心挑选的专用于前端开发的使用函数。
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

## 使用

```js
import micell from 'micell'

// 生成一个随机字符串
micell.randomString(6);

// 获取 Cookie 值
micell.cookie.get('name')
```

更多函数请查看[文档](/cn/docs/)。
