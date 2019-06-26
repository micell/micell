import isString from '../lang/isString'

// Todo: performance vs regexp

const isASCII = (ch) => {
  if (isString(ch) && ch.length === 1) {
    const charCode = ch.charCodeAt(0)
    return charCode <= 127
  }
  return false
}

export default isASCII
