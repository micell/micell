import isString from '../lang/isString'
import reDecimal from './decimal'

const isDecimal = string => isString(string) && reDecimal.test(string)

export default isDecimal
