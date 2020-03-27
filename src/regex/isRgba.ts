import isString from '../lang/isString'
import reRgba from './rgba'

const isRgba = (string: string): boolean => isString(string) && reRgba.test(string)

export default isRgba
