import isString from '../lang/isString'

const isPrint = (ch: string): boolean => {
  if (isString(ch) && ch.length === 1) {
    const charCode = ch.charCodeAt(0)
    return charCode >= 32 && charCode <= 126
  }
  return false
}

export default isPrint
