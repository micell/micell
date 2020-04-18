import isString from '../lang/isString'

const isLower = (ch: string): boolean => {
  if (isString(ch) && ch.length === 1) {
    const charCode = ch.charCodeAt(0)
    return charCode >= 97 && charCode <= 122
  }
  return false
}

export default isLower
