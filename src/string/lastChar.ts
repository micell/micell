import isString from '../lang/isString'

const lastChar = (str: string): string => {
  if (!isString(str)) {
    throw new Error('The parameter 1 should be a string')
  }
  return str.charAt(str.length - 1)
}

export default lastChar
