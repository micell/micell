# regex

## isAscii

```js
isAscii(str)
```

判断一个字符串是否只包含 ASCII 字符。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isAscii('hello world');
// => true
```

## isDecimal

```js
isDecimal(str)
```

判断一个字符串是否是一个小数记数法表示的数值。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isDecimal('1');
// => true
isDecimal('3.14');
// => true
```

## isDigit

```js
isDigit(str)
```

判断一个字符串是否只包含十进制数字（0-9）。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isDigit('0123');
// => true
```

## isDomain

```js
isDomain(str)
```

判断一个字符串是否是一个域名。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isDomain('example.com');
// => true
isDomain('https://example.com');
// => false
```

## isEmail

```js
isEmail(str)
```

判断一个字符串是否一个邮件地址。

> 如果你打算判断一个邮件地址是否有效，最好的办法是发送一封带有回执链接的邮件。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isEmail('alexchao1990@gmail.com');
// => true

isEmail('alexchao1990+github@gmail.com');
// => true
```

## isHexColor

```js
isHexColor(str)
```

判断一个字符串是否是一个十六进制数字格式的颜色值。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isHexColor('#f50');
// => true

isHexColor('#ff5500');
// => true

isHexColor('#FF5500');
// => true
```

## isHsl

```js
isHsl(str)
```

判断一个字符串是否是一个 HSL 颜色值。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isHsl('hsl(100, 50%, 50%)');
// => true

isHsl('HSL(100, 50%, 50%)');
// => true
```

## isHsla

```js
isHsla(str)
```

判断一个字符串是否是一个 HSLA 颜色值。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isHsla('hsla(100, 50%, 50%, 0.5)');
// => true

isHsla('HSLA(100, 50%, 50%, 0.5)');
// => true
```

## isInteger

```js
isInteger(str)
```

与`isDigit`相同，判断一个字符串是否只包含十进制数字。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isInteger('0123');
// => true
```

## isIP

```js
isIP(str)
```

判断一个字符串是否一个 IP（v4 或 v6）地址。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isIP('192.0.0.1');
// => true

isIP('2408:8100:2514:3f70:c98:15fe:9611:acdc');
// => true
```

## isIPv4

```js
isIPv4(str)
```

判断一个字符串是否是一个 IP v4 地址。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isIPv4('192.0.0.1');
// => true
```

## isIPv6

```js
isIPv6(str)
```

判断一个字符串是否是一个 IP v6 地址。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isIPv6('2408:8100:2514:3f70:c98:15fe:9611:acdc');
// => true
```

## isQQ

```js
isQQ(str)
```

判断一个字符串是否是一个 QQ 号。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isQQ('10000');
// => true
```

## isRealNumber

```js
isRealNumber(str)
```

判断一个字符串是否是一个实数。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isRealNumber('0.12');
// => true

isRealNumber('1.2e10');
// => true

isRealNumber('1.2e-10');
// => true
```

## isRgb

```js
isRgb(str)
```

判断一个字符串是否是一个 RGB 颜色值。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isRgb('rgb(255, 255, 255)');
// => true

isRgb('RGB(255, 255, 255)');
// => true
```

## isRgba

```js
isRgba(str)
```

判断一个字符串是否是个 RGBA 颜色值。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isRgb('rgba(255, 255, 255, 0.5)');
// => true

isRgb('RGBA(255, 255, 255, 0.5)');
// => true
```
