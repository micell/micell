# date

## diff

```js
diff(date1, date2, [unit], [roundFunc])
```

Compute the difference of the specified period unit between two dates.

**Since**

0.1.0

**Arguments**

* **`date1 (number|Date|string)`**: A timestamp number, a Date object or a parsable date string.
* **`date2 (number|Date|string)`**: A timestamp number, a Date object or a parsable date string.
* **`[unit = "ms"] (string)`**: A string specifies the peroid unit, default is `"ms"`. See unit table.
* **`[roundFunc = Math.round] (Function)`**: A round function, default is `Math.round`.

**Return**

* **`(number)`**

**Unit table**

| Unit value | Representation |
| ---------- | -------------- |
| Y          | Years          |
| M          | Months         |
| D          | Days           |
| h          | hours          |
| m          | minutes        |
| s          | seconds        |
| ms         | milliseconds   |

**Example**

```js
const date1 = '2019-01-01 00:00:00';
const date2 = new Date(2019, 1, 10, 0, 0, 0);
diff(date1, date2);
// => 3456000000
diff(date1, date2, 'D')
// => 40
```

## format

```js
format(date, format, [isUTC])
```

**Since**

0.1.0

**Arguments**

* **`date (number|string from 0.8.0|Date)`**: A timestamp number (unit: ms) or a parsable date string or a `Date` object.
* **`format (string)`**: A string of tokens, which is subset of the [moment format tokens](http://momentjs.com/docs/#/displaying/format/). see below table.
* **`[isUTC = false] (boolean)`**: Use the UTC time, default is `false`.

**Return**

* **`(string)`**

**Format tokens**

| Token | Output                  |
| ----- | ----------------------- |
| YY    | 70 71 ... 18 19         |
| YYYY  | 1970 1971 ... 2018 2019 |
| M     | 1 2 ... 11 12           |
| MM    | 01 02 ... 11 12         |
| D     | 1 2 ... 30 31           |
| DD    | 01 02 ... 30 31         |
| H     | 0 1 ... 22 23           |
| HH    | 00 01 ... 22 23         |
| h     | 1 2 ... 11 12           |
| hh    | 01 02 ... 11 12         |
| m     | 1 2 ... 58 59           |
| mm    | 01 02 ... 58 59         |
| s     | 1 2 ... 58 59           |
| ss    | 01 02 ... 58 59         |

**Example**

```js
const date = new Date(1970, 0, 1, 13, 1, 1);
format(date, 'YYYY-MM-DD HH:mm:ss');
// => "1970-01-01 13:01:01"
format(date, 'YYYY-M-D h:m:s');
// => "1970-1-1 1:1:1"
```

## parse

```js
parse(date, [isUTC])
```

**Since**

0.10.0

**Arguments**

* **`date (number|string|Date)`**: A timestamp number (unit: ms) or a parsable date string or a `Date` object.
* **`[isUTC = false] (boolean)`**: Use the UTC time, default is `false`.

**Return**

* **`(object)`**

**Example**

```js
// In UTC+0800
j
parse(0)
// => { years: 1970, months: 0, dates: 1, hours: 8, minutes: 0, seconds: 0, milliseconds: 0 }
parse(new Date(0))
// => { years: 1970, months: 0, dates: 1, hours: 8, minutes: 0, seconds: 0, milliseconds: 0 }
parse('Thu, 01 Jan 1970 00:00:00 GMT')
// => { years: 1970, months: 0, dates: 1, hours: 8, minutes: 0, seconds: 0, milliseconds: 0 }

parse(0, true)
// => { years: 1970, months: 0, dates: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }
parse(new Date(0), true)
// => { years: 1970, months: 0, dates: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }
parse('Thu, 01 Jan 1970 00:00:00 GMT', true)
// => { years: 1970, months: 0, dates: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }
```

## timeAgo

```js
timeAgo.format(date, [locale], [nowDate])
```

**Since**

0.1.0

**Arguments**

* **`date (number|Date|string)`**: A timestamp, a Date object or a parsable date string.
* **`[locale = "en_US"] (string)`**: the locale, "en_US" (default) and "zh_CN" are builtins supported.
* **`[nowDate = new Date()](Date)`**: The base date.

**Return**

* **`(string)`**

**Example**

```js
const d = new Date();
d.setMinutes(d.getMinutes() - 10);
timeAgo.format(d);
// => "10 minutes ago"

timeAgo.format(d, 'zh_CN');
// => "10 分钟前"
```
