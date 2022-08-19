import isString from '../lang/isString'
import reHsl from './hsl'

const isHsl = (string: string): boolean =>
  isString(string) && reHsl.test(string)

export default isHsl
