# char

## isAlphabetic

```js
isAlphabetic(ch)
```

判断一个字符是否是 a-z 或 A-Z。

**起始版本**

0.1.0

**参数**

* **`ch (string)`**：长度为 1 的字符串。

**返回值**

* **`(boolean)`**

**示例**

```js
isAlphabetic('a');
// => true

isAlphabetic('1');
// => false
```

## isAlphanumeric

```js
isAlphanumeric(ch)
```

判断一个字符是否是 a-z 或 A-Z 或 0-9。

**起始版本**

0.1.0

**参数**

* **`ch (string)`**：长度为 1 的字符串。

**返回值**

* **`(boolean)`**

**示例**

```js
isAlphanumeric('a');
// => true

isAlphanumeric('1');
// => true

isAlphanumeric('*');
// => false
```

## isASCII

```js
isASCII(ch)
```

判断一个字符是否是一个 ASCII 字符。

**起始版本**

0.1.0

**参数**

* **`ch (string)`**：长度为 1 的字符串。

**返回值**

* **`(boolean)`**

**示例**

```js
isASCII('a');
// => true

isASCII('1');
// => true

isASCII('你');
// => false
```

## isCJK

```js
isCJK(ch)
```

判断一个字符是否是一个 CJK（中文、日文、韩文）字符。

**起始版本**

0.1.0

**参数**

* **`ch (string)`**：长度为 1 的字符串。

**返回值**

* **`(boolean)`**

**示例**

```js
isCJK('你');
// => true

isCJK('の');
// => true
```

## isControl

```js
isControl(ch)
```

Detect a character whether it is a [control character](https://en.wikipedia.org/wiki/Control_character).
判断一个字符是否是一个[控制字符](https://en.wikipedia.org/wiki/Control_character)。

**起始版本**

0.1.0

**参数**

* **`ch (string)`**：长度为 1 的字符串。

**返回值**

* **`(boolean)`**

**示例**

```js
isControl('\t');
// => true

isControl('\r');
// => true
```

## isDigit

```js
isDigit(ch)
```

判断一个字符是否是一个十进制数字（0-9）。

**起始版本**

0.1.0

**参数**

* **`ch (string)`**：长度为 1 的字符串。

**返回值**

* **`(boolean)`**

**示例**

```js
isDigit('0');
// => true

isDigit('1');
// => true
```

## isGraph

```js
isGraph(ch)
```

判断一个字符是否是一个[图形字符](https://en.wikipedia.org/wiki/Graphic_character)。

**起始版本**

0.1.0

**参数**

* **`ch (string)`**：长度为 1 的字符串。

**返回值**

* **`(boolean)`**

**示例**

```js
isGraph('0');
// => true

isGraph('a');
// => true
```

## isHexadecimal

```js
isHexadecimal(ch)
```

判断一个字符是否是一个十六进制字符（0-9、a-f、A-F）。

**起始版本**

0.1.0

**参数**

* **`ch (string)`**：长度为 1 的字符串。

**返回值**

* **`(boolean)`**

**示例**

```js
isHexadecimal('0');
// => true

isHexadecimal('a');
// => true

isHexadecimal('A');
// => true
```

## isLower

```js
isLower(ch)
```

判断一个字符是否是小写字符（a-z）。

**起始版本**

0.1.0

**参数**

* **`ch (string)`**：长度为 1 的字符串。

**返回值**

* **`(boolean)`**

**示例**

```js
isLower('a');
// => true
```

## isPrint

```js
isPrint(ch)
```

判断一个字符是否是[可打印字符](https://en.wikipedia.org/wiki/ASCII#Printable_characters)。

**起始版本**

0.1.0

**参数**

* **`ch (string)`**：长度为 1 的字符串。

**返回值**

* **`(boolean)`**

**示例**

```js
isPrint('a');
// => true
```

## isPunctuation

```js
isPunctuation(ch)
```

Detect a character whether it is a punctuation character.
判断一个字符是否是标点字符。

**起始版本**

0.1.0

**参数**

* **`ch (string)`**：长度为 1 的字符串。

**返回值**

* **`(boolean)`**

**示例**

```js
isPunctuation(',');
// => true
```

## isSpace

```js
isSpace(ch)
```

判断一个字符是否是一个空格字符。

**起始版本**

0.1.0

**参数**

* **`ch (string)`**：长度为 1 的字符串。

**返回值**

* **`(boolean)`**

**示例**

```js
isSpace(' ');
// => true
```

## isUpper

```js
isUpper(ch)
```

判断一个字符是否是大写字符（A-Z）。

**起始版本**

0.1.0

**参数**

* **`ch (string)`**：长度为 1 的字符串。

**返回值**

* **`(boolean)`**

**示例**

```js
isUpper('a');
// => true
```
