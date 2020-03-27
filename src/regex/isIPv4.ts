import isString from '../lang/isString'
import reIPv4 from './ipv4'

const isIPv4 = (string: string): boolean => isString(string) && reIPv4.test(string)

export default isIPv4
