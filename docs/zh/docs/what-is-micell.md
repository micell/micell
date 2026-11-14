# Micell 是什么？

Micell（发音为 /maɪˈsel/，类似于 **my-cell**）是一个函数集合，这些函数用于每日的 Web 开发当中。
Micell 只包含那些在大部分项目当中共同使用的函数。当然，为了完整性，也会包含一些不常用的函数。

## Micell 不是什么？

* 不是 lodash、momentjs 或 dayjs 的替代品。
* 不会包含你的应用当中所有的工具函数。

## 为什么需要 Micell？

* **社区共享**：你无需重复写公用的工具函数了，Micell 实现了所有项目的复用。
* **Typescript 支持**：源码使用 TypeScript 书写，同时类型声明文件也包含在 npm 包里面。
* **高可靠性**：在真实 Chromium 中运行完整测试套件。
* **零运行时依赖**：ESM 产物并声明 `sideEffects: false`，未引用时可被打包器完全剔除。
