import isNumber from './lang/isNumber'

export default function numberFormat(number: number, digits = -1, dot = '.', sep = ','): string {
  if (!isNumber(number)) {
    return ''
  }
  const tenExp = 10 ** digits
  let result = number >= 0 ? '' : '-'
  let decPartStr: string

  if (digits > -1) {
    number = Math.round(number * tenExp) / tenExp
  }
  const abs = Math.abs(number)
  const intPart = Math.floor(abs)
  const decPart = Math.round(abs * tenExp - intPart * tenExp) / tenExp

  const intPartStr = intPart.toString()

  if (decPart === 0) {
    decPartStr = ''
  } else {
    decPartStr = decPart.toString().slice(2)
  }

  if (digits > -1) {
    for (let i = 0; i < digits; i++) {
      if (!decPartStr[i]) {
        decPartStr += '0'
      }
    }
    decPartStr = decPartStr.slice(0, digits)
  }

  const intLen = intPartStr.length
  const start = intLen % 3
  for (let i = 0; i < intLen; i++) {
    result += intPartStr[i]
    if ((i + 1 - start) % 3 === 0 && i !== intLen - 1) {
      result += sep
    }
  }

  if (decPartStr) {
    result += dot
    result += decPartStr
  }

  return result
}
