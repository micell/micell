import isDate from '../lang/isDate'
import isNumber from '../lang/isNumber'
import isString from '../lang/isString'

export interface ParsedDate {
  years: number
  months: number
  dates: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

export default function parse(
  date: number | string | Date,
  isUTC = false,
): ParsedDate {
  if (!isNumber(date) && !isString(date) && !isDate(date)) {
    throw new Error(
      'The first parameter should be a number, a parsable date string or a Date object',
    )
  }

  let d: Date

  if (isNumber(date) || isString(date)) {
    d = new Date(date)
  } else {
    d = date as Date
  }

  return {
    years: isUTC ? d.getUTCFullYear() : d.getFullYear(),
    months: isUTC ? d.getUTCMonth() : d.getMonth(),
    dates: isUTC ? d.getUTCDate() : d.getDate(),
    hours: isUTC ? d.getUTCHours() : d.getHours(),
    minutes: isUTC ? d.getUTCMinutes() : d.getMinutes(),
    seconds: isUTC ? d.getUTCSeconds() : d.getSeconds(),
    milliseconds: isUTC ? d.getUTCMilliseconds() : d.getMilliseconds(),
  }
}
