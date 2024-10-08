# micell

[![Build Status](https://github.com/micell/micell/actions/workflows/node.js.yml/badge.svg)](https://github.com/micell/micell/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/micell/micell/branch/master/graph/badge.svg)](https://codecov.io/gh/micell/micell)
[![npm](https://img.shields.io/npm/v/micell.svg)](https://www.npmjs.com/package/micell)
![David](https://img.shields.io/david/micell/micell)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/micell)
![NPM](https://img.shields.io/npm/l/micell)
[![BrowserStack Status](https://automate.browserstack.com/badge.svg?badge_key=Y3JwOGtWSysyUTRUR1BtZkZPQ3J4ZWxaOVJzMUYvZmsyVyt3TU9ZVXpNYz0tLVA5WXk4dVZxbURQb2FwTFIvN1E0UUE9PQ==--adf43d74135bbc962a24742452cc8625aa74e362)](https://automate.browserstack.com/public-build/Y3JwOGtWSysyUTRUR1BtZkZPQ3J4ZWxaOVJzMUYvZmsyVyt3TU9ZVXpNYz0tLVA5WXk4dVZxbURQb2FwTFIvN1E0UUE9PQ==--adf43d74135bbc962a24742452cc8625aa74e362)
[![Netlify Status](https://api.netlify.com/api/v1/badges/bff6938e-fda6-416f-84fd-bf33fc6a6072/deploy-status)](https://app.netlify.com/sites/pensive-leakey-00e229/deploys)

**[English](README.md)** | **简体中文**

Web 前端开发函数集

* Base64 对字符串或二进制数据编码和解码
* 字符范围判断
* Cookie 操作
* 日期差计算与格式化
* DOM 计算和操作
* 缓动函数（Easings）
* 判断 JavaScript 值类型
* 文件路径操作
* 查询字符串解析和字符串化
* 常见正则表达式
* 字符串操作
* 用户代理（User Agent）探测
* Ajax、CSS、JSONP、随机字符串、UUID 等等

## 安装

**Npm**

```sh
npm i -S micell
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

### 减少打包体积

可以通过 [babel-plugin-lodash](https://www.npmjs.com/package/babel-plugin-lodash) 来实现按需打包。

**.babelrc**

```json
{
  "plugins": [
    ["lodash", { "id": ["micell"] }]
  ]
}
```

## 文档

查看[文档](https://micell.org/docs)。

## 兼容性

* Chrome
* Firefox
* Safari
* Edge
* IE >= 11
* iOS >= 10
* Android >= 5

## 更新日志

查看[版本说明](https://github.com/micell/micell/releases)。

## 贡献

如果你有任何 bug，功能需求或者文档改善，你都可以[提](https://github.com/micell/micell/issues/new)一个 issue 或者[创建](https://github.com/micell/micell/pull/new/main)一个 pull request 到 [main](https://github.com/micell/micell/tree/main) 分支。

此外，你可以阅读 [CONTRIBUTING](CONTRIBUTING.md) 指南。

## 许可证

MIT

版权所有 (c) 2019-至今, Alex Chao
