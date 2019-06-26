import isString from '../lang/isString'
import reInteger from './integer'

const isInteger = string => isString(string) && reInteger.test(string)

export default isInteger
