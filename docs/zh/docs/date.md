# date

## diff

```js
diff(date1, date2, [unit], [roundFunc])
```

计算两个日期之间的差，可以指定单位及四舍五入函数。

**起始版本**

0.1.0

**参数**

* **`date1 (number|Date|string)`**：一个时间戳（单位：毫秒），或一个`Date`对象，或一个可被解析的日期字符串。
* **`date2 (number|Date|string)`**：一个时间戳（单位：毫秒），或一个`Date`对象，或一个可被解析的日期字符串。
* **`[unit = "ms"] (string)`**：一个表示时间单位的字符串，`d`（表示天），详细见下面表格。
* **`[roundFunc = Math.round] (Function)`**：一个四舍五入函数。

**返回值**

* **`(number)`**

**时间单位**

| 单位值 | 表示含义 |
| ------ | -------- |
| Y      | 年       |
| M      | 月       |
| D      | 日       |
| h      | 小时     |
| m      | 分钟     |
| s      | 秒       |
| ms     | 毫秒     |

**示例**

```js
const date1 = '2019-01-01 00:00:00';
diff(date1, date2);
// => 3456000000
diff(date1, date2, 'D')
// => 40
```

## format

```js
format(date, format, [isUTC])
```

根据指定的格式对一个日期格式化。

**起始版本**

0.1.0

**参数**

* **`date (number|string from 0.8.0|Date)`**：一个时间戳数值（单位：毫秒）或可解析的日期字符串或一个`Date`对象。
* **`format (string)`**：一个占位符替换字符串，为 [moment format tokens](http://momentjs.com/docs/#/displaying/format/) 的一部分，具体查看下面表格。
* **`[isUTC = false] (boolean)`**：是否使用协调世界时（UTC）。

**返回值**

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

**示例**

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

**起始版本**

0.10.0

**参数**

* **`date (number|string|Date)`**：一个时间戳数值（单位：毫秒）或可解析的日期字符串或一个`Date`对象。
* **`format (string)`**：一个占位符替换字符串，为 [moment format tokens](http://momentjs.com/docs/#/displaying/format/) 的一部分，具体查看下面表格。
* **`[isUTC = false] (boolean)`**：是否使用协调世界时（UTC）。

**返回值**

* **`(object)`**

**示例**

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

将一个日期格式化为“5 分钟之前”之类的字符串。

**起始版本**

0.1.0

**参数**

* **`date (number|Date|string)`**：一个时间戳（单位：毫秒），或一个`Date`对象，或一个可被解析的日期字符串。
* **`[locale = "en_US"] (string)`**：时区，内置支持`"en_US"`和`"zh_CN"`。
* **`[nowDate = new Date() (Date)`**：比对日期。

**返回值**

* **`(string)`**

**示例**

```js
const d = new Date();
d.setMinutes(d.getMinutes() - 10);
timeAgo.format(d);
// => "10 minutes ago"

timeAgo.format(d, 'zh_CN');
// => "10 分钟前"
```
