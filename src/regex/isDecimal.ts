import isString from '../lang/isString'
import reDecimal from './decimal'

const isDecimal = (string: string): boolean => isString(string) && reDecimal.test(string)

export default isDecimal
