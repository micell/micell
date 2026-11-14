# regex

> Since 1.0 you can import this module on its own: `import regex from 'micell/regex'` (ESM).

## ascii

```js
ascii
```

Matches strings made of ASCII / Latin-1 (`\x00`–`\xff`) characters.

**Since**

1.0.0

**Type**

* **`(RegExp)`**

**Example**

```js
ascii.test('hello');
// => true
```

## isAscii

```js
isAscii(str)
```

Check if a string contains the ASCII characters only.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

```js
isAscii('hello world');
// => true
```

## decimal

```js
decimal
```

Matches numbers in decimal notation, with an optional sign and an optional integer or fractional part.

**Since**

1.0.0

**Type**

* **`(RegExp)`**

**Example**

```js
decimal.test('1.5');
// => true
```

## isDecimal

```js
isDecimal(str)
```

Check if a string is a decimal number.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

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

Matches strings made of digits only.

**Since**

1.0.0

**Type**

* **`(RegExp)`**

**Example**

```js
digit.test('123');
// => true
```

## isDigit

```js
isDigit(str)
```

Check if a string contains the digits (0-9) only.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

```js
isDigit('0123');
// => true
```

## domain

```js
domain
```

Matches domain names. This is a format check, not a DNS lookup.

**Since**

1.0.0

**Type**

* **`(RegExp)`**

**Example**

```js
domain.test('example.com');
// => true
```

## isDomain

```js
isDomain(str)
```

Check if a string is a domain.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

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

Matches email addresses using the same rule as the HTML `email` input type.

**Since**

1.0.0

**Type**

* **`(RegExp)`**

**Example**

```js
email.test('name@example.com');
// => true
```

## isEmail

```js
isEmail(str)
```

Check if a string is an email address.

> If you need to check if an email is valid, the best option is that sending an email with a recipient link.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

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

Matches 3-digit or 6-digit hexadecimal color values.

**Since**

1.0.0

**Type**

* **`(RegExp)`**

**Example**

```js
hexColor.test('#fff');
// => true
```

## isHexColor

```js
isHexColor(str)
```

Check if a string is an hex color value.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

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

Matches `hsl()` color strings.

**Since**

1.0.0

**Type**

* **`(RegExp)`**

**Example**

```js
hsl.test('hsl(120, 50%, 50%)');
// => true
```

## isHsl

```js
isHsl(str)
```

Check if a string is an HSL value.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

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

Matches `hsla()` color strings.

**Since**

1.0.0

**Type**

* **`(RegExp)`**

**Example**

```js
hsla.test('hsla(120, 50%, 50%, 0.5)');
// => true
```

## isHsla

```js
isHsla(str)
```

Check if a string is an HSLA value.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

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

Matches integers made of digits only (no sign).

**Since**

1.0.0

**Type**

* **`(RegExp)`**

**Example**

```js
integer.test('123');
// => true
```

## isInteger

```js
isInteger(str)
```

Same as `isDigit`. Check if a string contains the digits only.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

```js
isInteger('0123');
// => true
```

## isIP

```js
isIP(str)
```

Check if a string is an IP (v4 or v6) address.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

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

Matches IPv4 addresses.

**Since**

1.0.0

**Type**

* **`(RegExp)`**

**Example**

```js
ipv4.test('192.168.0.1');
// => true
```

## isIPv4

```js
isIPv4(str)
```

Check if a string is an IP (v4) address.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

```js
isIPv4('192.0.0.1');
// => true
```

## ipv6

```js
ipv6
```

Matches IPv6 addresses.

**Since**

1.0.0

**Type**

* **`(RegExp)`**

**Example**

```js
ipv6.test('2001:db8::1');
// => true
```

## isIPv6

```js
isIPv6(str)
```

Check if a string is an IP (v4) address.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

```js
isIPv6('2408:8100:2514:3f70:c98:15fe:9611:acdc');
// => true
```

## qq

```js
qq
```

Matches QQ numbers (five or more digits, starting with 1).

**Since**

1.0.0

**Type**

* **`(RegExp)`**

**Example**

```js
qq.test('10000');
// => true
```

## isQQ

```js
isQQ(str)
```

Check if a string is a QQ id.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

```js
isQQ('10000');
// => true
```

## realNumber

```js
realNumber
```

Matches real numbers, including a sign and scientific notation.

**Since**

1.0.0

**Type**

* **`(RegExp)`**

**Example**

```js
realNumber.test('1e5');
// => true
```

## isRealNumber

```js
isRealNumber(str)
```

Check if a string is a real number.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

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

Matches `rgb()` color strings.

**Since**

1.0.0

**Type**

* **`(RegExp)`**

**Example**

```js
rgb.test('rgb(255, 0, 0)');
// => true
```

## isRgb

```js
isRgb(str)
```

Check if a string is a RGB value.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

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

Matches `rgba()` color strings.

**Since**

1.0.0

**Type**

* **`(RegExp)`**

**Example**

```js
rgba.test('rgba(255, 0, 0, 0.5)');
// => true
```

## isRgba

```js
isRgba(str)
```

Check if a string is a RGBA value.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

```js
isRgb('rgba(255, 255, 255, 0.5)');
// => true

isRgb('RGBA(255, 255, 255, 0.5)');
// => true
```
