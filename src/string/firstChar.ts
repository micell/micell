import isString from '../lang/isString'

const firstChar = (str: string): string => {
  if (!isString(str)) {
    throw new Error('The parameter 1 should be a string')
  }
  return str.charAt(0)
}

export default firstChar
