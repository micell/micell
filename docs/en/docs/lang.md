# lang

## getType

```js
getType(value)
```

Return the type of `value`.

**Since**

0.14.0

**Arguments**

* **`value (any)`**

**Return**

* **`(string)`**

**Example**

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

Check if a value is an Array.

**Since**

0.1.0

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

```js
isArray([])
// => true
```

## isBigInt

```js
isBigInt(value)
```

Check if a value is a BigInt value.

**Since**

0.8.0

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

```js
isBigInt(BigInt(1));
// => true
```

## isBoolean

```js
isBoolean(value)
```

Check if a value is a Boolean.

**Since**

0.1.0

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

```js
isBoolean(true);
// => true
```

## isDate

```js
isDate(value)
```

Check if a value is a Date object.

**Since**

0.1.0

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

```js
isDate([]);
// => true
```

## isError

```js
isError(value)
```

Check if a value is an Error object.

**Since**

0.1.0

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

```js
isError(new Error('error message'));
// => true
```

## isFunction

```js
isFunction(value)
```

Check if a value is a function, including generator function and async function.

**Since**

0.1.0

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

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

Check if a value is `null` or `undefined`.

**Since**

0.1.0

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

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

Check if a value is `null`

**Since**

0.1.0

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

```js
isNull(null);
// => true
```

## isNumber

```js
isNumber(value)
```

Check if a value is a Number.

**Since**

0.1.0

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

```js
isNumber(1);
// => true
```

## isObject

```js
isObject(value)
```

Check if a value is an Object.

**Since**

0.1.0

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

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

Check if a value is a RegExp object.

**Since**

0.1.0

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

```js
isRegExp(/\s+/);
// => true
```

## isString

```js
isString(value)
```

Check if a value is a String.

**Since**

0.1.0

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

```js
isString('hello world');
// => true
```

## isSymbol

```js
isSymbol(value)
```

Check if a value is a Symbol value.

**Since**

0.8.0

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

```js
isSymbol(Symbol('foo'));
// => true
```

## isUndefined

```js
isUndefined(value)
```

Check if a value is `undefined`.

**Since**

0.1.0

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

```js
isUndefined(void 0);
// => true
```
