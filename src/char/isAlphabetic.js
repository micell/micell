import isString from '../lang/isString'

const isAlphabetic = (ch) => {
  if (isString(ch) && ch.length === 1) {
    const charCode = ch.charCodeAt(0)
    return (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
  }
  return false
}

export default isAlphabetic
