import isDate from '../lang/isDate'

export default function diff(
  date1: number | string | Date,
  date2: number | string | Date,
  unit?: string,
  roundFunc: (value: number) => number = Math.round,
): number {
  const d1 = isDate(date1) ? (date1 as Date) : new Date(date1)
  const d2 = isDate(date2) ? (date2 as Date) : new Date(date2)
  const dateDiff = d2.getTime() - d1.getTime()
  let result = 0

  switch (unit) {
    case 'Y':
      result = roundFunc(dateDiff / (365 * 24 * 60 * 60 * 1000))
      break
    case 'M':
      result = roundFunc(dateDiff / (30 * 24 * 60 * 60 * 1000))
      break
    case 'D':
      result = roundFunc(dateDiff / (24 * 60 * 60 * 1000))
      break
    case 'h':
      result = roundFunc(dateDiff / (60 * 60 * 1000))
      break
    case 'm':
      result = roundFunc(dateDiff / (60 * 1000))
      break
    case 's':
      result = roundFunc(dateDiff / 1000)
      break
    case 'ms':
    default:
      result = dateDiff
      break
  }

  return result
}
