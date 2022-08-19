import isString from '../lang/isString'
import reHsla from './hsla'

const isHsla = (string: string): boolean =>
  isString(string) && reHsla.test(string)

export default isHsla
