import isString from '../lang/isString'
import reHsl from './hsl'

const isHsl = string => isString(string) && reHsl.test(string)

export default isHsl
