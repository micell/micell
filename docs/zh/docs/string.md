# string

## countChars

```js
countChars(str, [type])
```

计算一个字符串当中字符数量。

**起始版本**

0.1.0

**参数**

* **`str (string)`**
* **`[type = 0] (number)`**：如果`type`是`0`，则返回字符串的长度值（length）。如果`type`是`1`，则一个全宽字符计数为 2，一个半宽字符计数为 1。如果`type`是`2`，则一个全宽字符计数为 1，一个半宽字符计数为 0.5，但是最终结果会向上取整。

**返回值**

* **`(number)`**

**示例**

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

计算字符串的行数（以`\n`为分隔符）。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(number)`**

**示例**

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

对正则表达式当中的特殊字符进行转义。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(string)`**

**示例**

```js
escapeRegexp('a-z');
// => "a\-z"
```

## firstChar

```js
firstChar(str)
```

返回一个字符串的首个字符。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(string)`**

**示例**

```js
firstChar('hello');
// => "h"
```

## isValidJSON

```js
isValidJSON(str)
```

判断一个字符串是否是一个合法的 JSON 字符串。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(boolean)`**

**示例**

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

返回一个字符串的最后一个字符。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(string)`**

**示例**

```js
lastChar('hello');
// => "o"
```

## truncate

```js
truncate([str = ''], [options = {}])
```

返回一个裁剪之后的字符串，并可指定结尾字符串。

**起始版本**

0.1.0

**参数**

* **`[str = ""] (string)`**：被裁剪的字符串。
* **`[options = {}] (Object)`**：配置对象
  + **`[length] (number)`**：允许的最大字符串长度，默认为`str`长度。
  + **`[omission = "..."] (string)`**：结尾字符串。
  + **`[countType = 0] (number)`**：如何对半宽与全宽字符计数。
    - `0`：每个字符长度都算做 1。
    - `1`：半宽长度算作 1，全宽字符长度算作 2。
    - `2`：两个半宽字符长度算作 1，不足按 1 算，全宽字符长度算作 1。

**返回值**

* **`(string)`**

**示例**

```js
const str = 'hello, 你好，world!世界！';
truncate(str);
truncate(str, { length: 10 });
truncate(str, { omission: '***' });
truncate(str, { length: 10, countType: 1 });
```
