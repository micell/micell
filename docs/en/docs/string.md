# string

## countChars

```js
countChars(str, [type])
```

Count the number of characters in a string.

**Since**

0.1.0

**Arguments**

* **`str (string)`**
* **`[type = 0] (number)`**: If `type` is `0`, return the length of string. If `type` is `1`, a full width character is counted 2, an half width character is counted 1. If `type` is `1`, a full width character is counted 1, an half width characters is counted 0.5, but the result will be round up to an integer.

**Return**

* **`(number)`**

**Example**

```js
countChars('hello你好')
// => 7
countChars('hello你好', 1)
// => 9
countChars('hello你好', 2)
// => 5
```

## countLines

```js
countLines(str)
```

Count the number of lines separated by `"\n"`.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(number)`**

**Example**

```js
const str = `hello
world
1`;
countLines(str);
// => 3
```

## escapeRegexp

```js
escapeRegexp(str)
```

Escape the special characters in regular expression.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(string)`**

**Example**

```js
escapeRegexp('a-z');
// => "a\-z"
```

## firstChar

```js
firstChar(str)
```

Return the first character of a string.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(string)`**

**Example**

```js
firstChar('hello');
// => "h"
```

## isValidJSON

```js
isValidJSON(str)
```

Check if a string is a valid JSON string.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

```js
isValidJSON('{"name": "Alex Chao"}');
// => true

isValidJSON('""');
// => true
```

## lastChar

```js
lastChar(str)
```

Return the last character of a string.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(string)`**

**Example**

```js
lastChar('hello');
// => "o"
```

## truncate

```js
truncate([str], [options])
```

Return a truncated string end with the specified omission.

**Since**

0.1.0

**Arguments**

* **`[str = ""] (string)`**: The string to be truncated.
* **`[options = {}] (Object)`**: The options object.
  + **`[length] (number)`**: The maxmium string length. It is the `str` length by default.
  + **`[omission = "..."] (string)`**: The omission string.
  + **`[countType = 0] (number)`**: How to count the half width and full width characters.
    - `0`: Count 1 for each character.
    - `1`: Count 1 for half width and count 2 for full width.
    - `2`: Count 0.5 for half width and count 1 for full width.

**Return**

* **`(string)`**

**Example**

```js
const str = 'hello, 你好，world!世界！';
truncate(str);
truncate(str, { length: 10 });
truncate(str, { omission: '***' });
truncate(str, { length: 10, countType: 1 });
```
