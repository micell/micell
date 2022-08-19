import isString from '../lang/isString'
import reDomain from './domain'

const isDomain = (string: string): boolean =>
  isString(string) && reDomain.test(string)

export default isDomain
