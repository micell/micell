import isString from '../lang/isString'

const isUpper = (ch: any): boolean => {
  if (isString(ch) && ch.length === 1) {
    const charCode = ch.charCodeAt(0)
    return charCode >= 65 && charCode <= 90
  }
  return false
}

export default isUpper
