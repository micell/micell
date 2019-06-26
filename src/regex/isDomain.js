import isString from '../lang/isString'
import reDomain from './domain'

const isDomain = string => isString(string) && reDomain.test(string)

export default isDomain
