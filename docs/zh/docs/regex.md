# regex

> 1.0 起可以按模块引入：`import regex from 'micell/regex'`（ESM）。

## ascii

```js
ascii
```

匹配 ASCII 及其扩展（Latin-1，`\x00`–`\xff`）范围内的字符串。

**起始版本**

1.0.0

**类型**

* **`(RegExp)`**

**示例**

```js
ascii.test('hello');
// => true
```

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

## decimal

```js
decimal
```

匹配小数记数法表示的数值，支持正负号，整数部分或小数部分可省略。

**起始版本**

1.0.0

**类型**

* **`(RegExp)`**

**示例**

```js
decimal.test('1.5');
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

## digit

```js
digit
```

匹配只由数字组成的字符串。

**起始版本**

1.0.0

**类型**

* **`(RegExp)`**

**示例**

```js
digit.test('123');
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

## domain

```js
domain
```

匹配域名。这是格式校验，不验证域名是否真实存在。

**起始版本**

1.0.0

**类型**

* **`(RegExp)`**

**示例**

```js
domain.test('example.com');
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

## email

```js
email
```

匹配邮箱地址，规则与 HTML `email` 输入类型一致。

**起始版本**

1.0.0

**类型**

* **`(RegExp)`**

**示例**

```js
email.test('name@example.com');
// => true
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

## hexColor

```js
hexColor
```

匹配 3 位或 6 位的十六进制颜色值。

**起始版本**

1.0.0

**类型**

* **`(RegExp)`**

**示例**

```js
hexColor.test('#fff');
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

## hsl

```js
hsl
```

匹配 `hsl()` 颜色字符串。

**起始版本**

1.0.0

**类型**

* **`(RegExp)`**

**示例**

```js
hsl.test('hsl(120, 50%, 50%)');
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

## hsla

```js
hsla
```

匹配 `hsla()` 颜色字符串。

**起始版本**

1.0.0

**类型**

* **`(RegExp)`**

**示例**

```js
hsla.test('hsla(120, 50%, 50%, 0.5)');
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

## integer

```js
integer
```

匹配只由数字组成的整数（不含正负号）。

**起始版本**

1.0.0

**类型**

* **`(RegExp)`**

**示例**

```js
integer.test('123');
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

## ipv4

```js
ipv4
```

匹配 IPv4 地址。

**起始版本**

1.0.0

**类型**

* **`(RegExp)`**

**示例**

```js
ipv4.test('192.168.0.1');
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

## ipv6

```js
ipv6
```

匹配 IPv6 地址。

**起始版本**

1.0.0

**类型**

* **`(RegExp)`**

**示例**

```js
ipv6.test('2001:db8::1');
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

## qq

```js
qq
```

匹配 QQ 号（5 位及以上且以 1 开头）。

**起始版本**

1.0.0

**类型**

* **`(RegExp)`**

**示例**

```js
qq.test('10000');
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

## realNumber

```js
realNumber
```

匹配实数，支持正负号与科学计数法。

**起始版本**

1.0.0

**类型**

* **`(RegExp)`**

**示例**

```js
realNumber.test('1e5');
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

## rgb

```js
rgb
```

匹配 `rgb()` 颜色字符串。

**起始版本**

1.0.0

**类型**

* **`(RegExp)`**

**示例**

```js
rgb.test('rgb(255, 0, 0)');
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

## rgba

```js
rgba
```

匹配 `rgba()` 颜色字符串。

**起始版本**

1.0.0

**类型**

* **`(RegExp)`**

**示例**

```js
rgba.test('rgba(255, 0, 0, 0.5)');
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
