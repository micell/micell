import isString from '../lang/isString'
import reIPv6 from './ipv6'

const isIPv6 = (string: string): boolean => isString(string) && reIPv6.test(string)

export default isIPv6
