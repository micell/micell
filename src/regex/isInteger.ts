import isString from '../lang/isString'
import reInteger from './integer'

const isInteger = (string: string): boolean =>
  isString(string) && reInteger.test(string)

export default isInteger
