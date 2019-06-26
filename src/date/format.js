import isDate from '../lang/isDate'
import isNumber from '../lang/isNumber'
import isString from '../lang/isString'
import padStart from '../_internal/padStart'

const dateFormat = (date, format, isUTC) => {
  if (!isDate(date) && !isNumber(date)) {
    throw new Error('The first parameter should be a Date object or a number')
  }

  let d = date

  if (isNumber(date)) {
    d = new Date(d)
  }

  if (!isString(format)) {
    return d.toString()
  }

  const year = isUTC ? d.getUTCFullYear() : d.getFullYear()
  const month = isUTC ? d.getUTCMonth() : d.getMonth()
  const day = isUTC ? d.getUTCDate() : d.getDate()
  const hour = isUTC ? d.getUTCHours() : d.getHours()
  const hour12 = hour % 12
  const amOrPm = hour < 12 ? 'AM' : 'PM'
  const minute = isUTC ? d.getUTCMinutes() : d.getMinutes()
  const second = isUTC ? d.getUTCSeconds() : d.getSeconds()
  const millisecond = isUTC ? d.getUTCMilliseconds() : d.getMilliseconds()

  return format
    .replace(/(^|[^Y])YYYY([^Y]|$)/g, `$1${year}$2`)
    .replace(/(^|[^Y])YY([^Y]|$)/g, `$1${String(year).slice(-2)}$2`)
    .replace(/(^|[^M])MM([^M]|$)/g, `$1${padStart(month + 1, 2, '0')}$2`)
    .replace(/(^|[^M])M([^M]|$)/g, `$1${month}$2`)
    .replace(/(^|[^D])DD([^D]|$)/g, `$1${padStart(day, 2, '0')}$2`)
    .replace(/(^|[^D])D([^D]|$)/g, `$1${day}$2`)
    .replace(/(^|[^H])HH([^H]|$)/g, `$1${padStart(hour, 2, '0')}$2`)
    .replace(/(^|[^H])H([^H]|$)/g, `$1${hour}$2`)
    .replace(/(^|[^h])hh([^h]|$)/g, `$1${padStart(hour12, 2, '0')}$2`)
    .replace(/(^|[^h])h([^h]|$)/g, `$1${hour12}$2`)
    .replace(/(^|[^A])A([^A]|$)/g, `$1${amOrPm}$2`)
    .replace(/(^|[^a])a([^a]|$)/g, `$1${amOrPm.toLowerCase()}$2`)
    .replace(/(^|[^m])mm([^m]|$)/g, `$1${padStart(minute, 2, '0')}$2`)
    .replace(/(^|[^m])m([^m]|$)/g, `$1${minute}$2`)
    .replace(/(^|[^s])ss([^s]|$)/g, `$1${padStart(second, 2, '0')}$2`)
    .replace(/(^|[^s])s([^s]|$)/g, `$1${second}$2`)
    .replace(/(^|[^S]+)([S]+)([^S]+|$)/g, (match, s1, s2, s3) => {
      let msStr = padStart(String(millisecond), 3, '0')
      for (let i = 3; i < s2.length; i++) {
        msStr += '0'
      }
      msStr = msStr.slice(0, s2.length)
      return `${s1}${msStr}${s3}`
    })
}

export default dateFormat
