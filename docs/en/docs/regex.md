# regex

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
