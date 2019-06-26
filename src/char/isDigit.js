import isString from '../lang/isString'

const isDigit = (ch) => {
  if (isString(ch) && ch.length === 1) {
    const charCode = ch.charCodeAt(0)
    return charCode >= 48 && charCode <= 57
  }
  return false
}

export default isDigit
