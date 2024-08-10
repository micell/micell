# cookie

## get

```js
get(key)
```

获取指定名称的 Cookie 值，使用`decodeURIComponent`解码。

**起始版本**

0.1.0

**参数**

* **`key (string)`**：Cookie 名称。

**返回值**

* **`(string)`**

## getAll

```js
getAll()
```

获取所有的 Cookie 值，使用`decodeURIComponent`解码。

**起始版本**

0.1.0

**返回值**

* **`(Object)`**

## getJson

```
getJson(key)
```

获取指定名称的 Cookie 值，使用`JSON.parse`解码。

**起始版本**

0.1.0

**参数**

* **`key (string)`**：Cookie 名称。

**返回值**

* **`(Any)`**

## getRaw

```
getRaw(key)
```

获取指定名称的 Cookie 值，不应用任何解码。

**起始版本**

0.1.0

**参数**

* **`key (string)`**：Cookie 名称。

**返回值**

* **`(string)`**

## isEnabled

```js
isEnabled()
```

检测 Cookie 功能是否启用。

**起始版本**

0.1.0

**返回值**

* **`(boolean)`**

## remove

```js
remove(key, [options])
```

移除当前域名下指定名称的 Cookie。

**起始版本**

0.1.0

**参数**

* **`key (string)`**：Cookie 名称。
* **`[options] (Object)`**：Cookie 配置参数。
  + **`[domain] (string)`**
  + **`[path = "/"] (string)`**

## set

```js
set(key, value, [options])
```

设置一个 Cookie，`value`参数将会使用`encodeURIComponent`进行编码。

**起始版本**

0.1.0

**参数**

* **`key (string)`**：Cookie 名称
* **`value (string)`**：Cookie 值。
* **`[options] (Object)`**：Cookie 配置。
  + **`[domain] (string)`**：Cookie 所属域名。
  + **`[path = "/"] (string)`**：Cookie 所属路径。
  + **`[expires] (number|string|Date)`**：可以是一个`Date`对象，一个可被`Date.parse()`解析的日期字符串，一个整数（单位：天），或者一个带时间后缀的数值字符串。
  + **`[max-age] (number)`**：Cookie 持续时间。
  + **`[samesite] (boolean)`**
  + **`[secure] (boolean)`**

| 单位后缀 | 含义 |
| -------- | ---- |
| Y        | 年   |
| M        | 月   |
| D        | 天   |
| h        | 日   |
| m        | 分   |
| s        | 秒   |

## setJson

```js
set(key, value, [options])
```

同`set`，设置一个 Cookie，只是`value`参数将会使用`JSON.stringify`进行编码。

**起始版本**

0.1.0

**参数**

* **`key (string)`**：Cookie 名称
* **`value (string)`**：Cookie 值。
* **`[options] (Object)`**：Cookie 配置。
  + **`[domain] (string)`**：Cookie 所属域名。
  + **`[path = "/"] (string)`**：Cookie 所属路径。
  + **`[expires] (number|string|Date)`**：可以是一个`Date`对象，一个可被`Date.parse()`解析的日期字符串，一个整数（单位：天），或者一个带时间后缀的数值字符串。
  + **`[max-age] (number)`**：Cookie 持续时间。
  + **`[samesite] (boolean)`**
  + **`[secure] (boolean)`**


## setRaw

```js
setRaw(key, value, [options])
```

同`set`，设置一个 Cookie，只是`value`参数不使用任何编码。

**起始版本**

0.1.0

**参数**

* **`key (string)`**：Cookie 名称
* **`value (string)`**：Cookie 值。
* **`[options] (Object)`**：Cookie 配置。
  + **`[domain] (string)`**：Cookie 所属域名。
  + **`[path = "/"] (string)`**：Cookie 所属路径。
  + **`[expires] (number|string|Date)`**：可以是一个`Date`对象，一个可被`Date.parse()`解析的日期字符串，一个整数（单位：天），或者一个带时间后缀的数值字符串。
  + **`[max-age] (number)`**：Cookie 持续时间。
  + **`[samesite] (boolean)`**
  + **`[secure] (boolean)`**
