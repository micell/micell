# lang

## getType

```js
getType(value)
```

返回`value`的数据类型。

**起始版本**

0.14.0

**参数**

* **`value (any)`**

**返回值**

* **`(string)`**

**示例**

```js
getType(undefined)
// => 'Undefined'
getType(null)
// => 'Null'
getType(1)
// => 'Number'
getType(true)
// => 'Boolean'
getType('')
// => 'String'
getType(Symbol('foo'))
// => 'Symbol'
getType(0n)
// => 'BigInt'
getType({})
// => 'Object'
getType([])
// => 'Array'
getType(/\s/)
// => 'RegExp'
getType(new Date())
// => 'Date'
getType(function () {})
// => 'Function'
```
## isArray

```js
isArray(value)
```

判断一个值是否是数组类型。

**起始版本**

0.1.0

**参数**

* **`value (any)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isArray([]);
// => true
```

## isBigInt

```js
isBigInt(value)
```

判断一个值是否是 BigInt 类型。

**起始版本**

0.8.0

**参数**

* **`value (any)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isBigInt(BigInt(1));
// => true
```

## isBoolean

```js
isBoolean(value)
```

判断一个值是否是布尔类型。

**起始版本**

0.1.0

**参数**

* **`value (any)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isBoolean(true);
// => true
```

## isDate

```js
isDate(value)
```

判断一个值是否是 Date 对象。

**起始版本**

0.1.0

**参数**

* **`value (any)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isDate([]);
// => true
```

## isError

```js
isError(value)
```

判断一个值是否是 Error 类型。

**起始版本**

0.1.0

**参数**

* **`value (any)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isError(new Error('error message'));
// => true
```

## isFunction

```js
isFunction(value)
```

判断一个值是否是一个函数，包括生成器函数和异步函数。

**起始版本**

0.1.0

**参数**

* **`value (any)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isFunction(function () {});
// => true

isFunction(function* () {});
// => true
```

## isNil

```js
isNil(value)
```

判断一个值是否是`null`或`undefined`。

**起始版本**

0.1.0

**参数**

* **`value (any)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isNil(null);
// => true
isNil(undefined);
// => true
```

## isNull

```js
isNull(value)
```

判断一个值是否是`null`。

**起始版本**

0.1.0

**参数**

* **`value (any)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isNull(null);
// => true
```

## isNumber

```js
isNumber(value)
```

判断一个值是否是数值类型。

**起始版本**

0.1.0

**参数**

* **`value (any)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isNumber(1);
// => true
```

## isObject

```js
isObject(value)
```

判断一个值是否是一个对象类型。

**起始版本**

0.1.0

**参数**

* **`value (any)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isObject({});
// => true
isObject(null);
// => false
```

## isRegExp

```js
isRegExp(value)
```

判断一个值是否是 RegExp 对象。

**起始版本**

0.1.0

**参数**

* **`value (any)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isRegExp(/\s+/);
// => true
```

## isString

```js
isString(value)
```

判断一个值是否是字符串类型。

**起始版本**

0.1.0

**参数**

* **`value (any)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isString('hello world');
// => true
```

## isSymbol

```js
isSymbol(value)
```

判断一个值是否是 Symbol 类型。

**起始版本**

0.8.0

**参数**

* **`value (any)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isSymbol(Symbol('foo'));
// => true
```

## isUndefined

```js
isUndefined(value)
```

判断一个值是否是`undefined`。

**起始版本**

0.1.0

**参数**

* **`value (any)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isUndefined(void 0);
// => true
```
