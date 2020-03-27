import isString from '../lang/isString'
import reHexColor from './hexColor'

const isHexColor = (string: string): boolean => isString(string) && reHexColor.test(string)

export default isHexColor
