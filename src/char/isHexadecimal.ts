import isString from '../lang/isString'

const isHexadecimal = (ch: string): boolean => {
  if (isString(ch) && ch.length === 1) {
    const charCode = ch.charCodeAt(0)
    return (charCode >= 48 && charCode <= 57) ||
      (charCode >= 65 && charCode <= 70) ||
      (charCode >= 97 && charCode <= 102)
  }
  return false
}

export default isHexadecimal
