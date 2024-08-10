# cookie

## get

```js
get(key)
```

Get the cookie's value of the specified name, with `decodeURIComponent` decoding.

**Since**

0.1.0

**Arguments**

* **`key (string)`**: Cookie name.

**Return**

* **`(string)`**

## getAll

```js
getAll()
```

Get the all cookies' value, with `decodeURIComponent` decoding.

**Since**

0.1.0

**Return**

* **`(Object)`**

## getJson

```
getJson(key)
```

Get the cookie's value of the specified name, with `JSON.parse` decoding.

**Since**

0.1.0

**Arguments**

* **`key (string)`**: Cookie name.

**Return**

* **`(string)`**

## getRaw

```
getRaw(key)
```

Get the cookie's value of the specified name, without decoding.

**Since**

0.1.0

**Arguments**

* **`key (string)`**

**Return**

* **`(string)`**

## isEnabled

```js
isEnabled()
```

Check if the cookie is enabled.

**Since**

0.1.0

**Return**

* **`(boolean)`**

## remove

```js
remove(key, [options])
```

Remove a cookie.

**Since**

0.1.0

**Arguments**

* **`key (string)`**: Cookie name.
* **`[options] (Object)`**: Cookie options.
  + **`[domain] (string)`**
  + **`[path = "/"] (string)`**

## set

```js
set(key, value, options)
```

Set a cookie, and the `value` argument will be encoded with `encodeURIComponent`.

**Arguments**

* **`key (string)`**: Cookie name.
* **`value (string)`**: Cookie value.
* **`[options] (Object)`**: Cookie options.
  + **`[domain] (string)`**: The domain belongs to.
  + **`[path = "/"] (string)`**: The path belongs to.
  + **`[expires] (number|string|Date)`**: It can accept a `Date` object, a parsable date string (parsed by `Date.parse()`), an integer (unit: day) or a numeric string with a suffix character which specifies the time unit.
  + **`[max-age] (number)`** The time of existence.
  + **`[samesite] (boolean)`**
  + **`[secure] (boolean)`**

| Unit suffix | Representation |
| ----------- | -------------- |
| Y           | One year       |
| M           | One month      |
| D           | One day        |
| h           | One hour       |
| m           | One minute     |
| s           | One second     |

## setJson

```js
setJson(key, value, [options])
```

Same as `set`, set a cookie, and the `value` argument will be encoded with `JSON.stringify`.

**Since**

0.1.0

**Arguments**

* **`key (string)`**: Cookie name.
* **`value (Any)`**: Cookie value.
* **`[options] (Object)`**: Cookie options.
  + **`[domain] (string)`**: The domain belongs to.
  + **`[path = "/"] (string)`**: The path belongs to.
  + **`[expires] (number|string|Date)`**: It can accept a `Date` object, a parsable date string (parsed by `Date.parse()`), an integer (unit: day) or a numeric string with a suffix character which specifies the time unit.
  + **`[max-age] (number)`** The time of existence.
  + **`[samesite] (boolean)`**
  + **`[secure] (boolean)`**

## setRaw

```js
setRaw(key, value, options)
```

Same as `set`, set a cookie without any encoding.

**Since**

0.1.0

**Arguments**

* **`key (string)`**: Cookie name.
* **`value (Any)`**: Cookie value.
* **`[options] (Object)`**: Cookie options.
  + **`[domain] (string)`**: The domain belongs to.
  + **`[path = "/"] (string)`**: The path belongs to.
  + **`[expires] (number|string|Date)`**: It can accept a `Date` object, a parsable date string (parsed by `Date.parse()`), an integer (unit: day) or a numeric string with a suffix character which specifies the time unit.
  + **`[max-age] (number)`** The time of existence.
  + **`[samesite] (boolean)`**
  + **`[secure] (boolean)`**
