import isString from '../lang/isString'

const firstChar = (str) => {
  if (!isString(str)) {
    throw new Error('The parameter 1 should be a string')
  }
  return str.chatAt(0)
}

export default firstChar
