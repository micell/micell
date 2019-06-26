import isString from '../lang/isString'
import reRgb from './rgb'

const isRgb = string => isString(string) && reRgb.test(string)

export default isRgb
