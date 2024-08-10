# char

## isAlphabetic

```js
isAlphabetic(ch)
```

Detect a character whether it is one of a-z or A-Z.

**Since**

0.1.0

**Arguments**

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

**Example**

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

Detect a character whether it is one of a-z or A-Z or 0-9.

**Since**

0.1.0

**Arguments**

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

**Example**

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

Detect a character whether it is an ASCII character.

**Since**

0.1.0

**Arguments**

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

**Example**

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

Detect a character whether it is a CJK (Chinese, Japanese and Korean) character.

**Since**

0.1.0

**Arguments**

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

**Example**

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

**Since**

0.1.0

**Arguments**

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

**Example**

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

Detect a character whether it is a decimal digit (0-9).

**Since**

0.1.0

**Arguments**

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

**Example**

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

Detect a character whether it is a [graphic character](https://en.wikipedia.org/wiki/Graphic_character).

**Since**

0.1.0

**Arguments**

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

**Example**

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

Detect a character whether it is a hexadecimal character (0-9, a-f, A-F).

**Since**

0.1.0

**Arguments**

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

**Example**

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

Detect a character whether it is a lower-case character (a-z).

**Since**

0.1.0

**Arguments**

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

**Example**

```js
isLower('a');
// => true
```

## isPrint

```js
isPrint(ch)
```

Detect a character whether it is a [printable character](https://en.wikipedia.org/wiki/ASCII#Printable_characters).

**Since**

0.1.0

**Arguments**

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

**Example**

```js
isPrint('a');
// => true
```

## isPunctuation

```js
isPunctuation(ch)
```

Detect a character whether it is a punctuation character.

**Since**

0.1.0

**Arguments**

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

**Example**

```js
isPunctuation(',');
// => true
```

## isSpace

```js
isSpace(ch)
```

Detect a character whether it is a space character.

**Since**

0.1.0

**Arguments**

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

**Example**

```js
isSpace(' ');
// => true
```

## isUpper

```js
isUpper(ch)
```

Detect a character whether it is a upper-case character (A-Z).

**Since**

0.1.0

**Arguments**

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

**Example**

```js
isUpper('a');
// => true
```
