import isString from '../lang/isString'

const isSpace = (ch: any): boolean => {
  if (isString(ch) && ch.length === 1) {
    const charCode = ch.charCodeAt(0)
    return (charCode >= 9 && charCode <= 13) || charCode === 32
  }
  return false
}

export default isSpace
