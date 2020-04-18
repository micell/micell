import isString from '../lang/isString'

const isControl = (ch: string): boolean => {
  if (isString(ch) && ch.length === 1) {
    const charCode = ch.charCodeAt(0)
    return (charCode >= 0 && charCode <= 31) || charCode === 127
  }
  return false
}

export default isControl
