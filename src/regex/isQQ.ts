import isString from '../lang/isString'
import reQQ from './qq'

const isQQ = (string: string): boolean => isString(string) && reQQ.test(string)

export default isQQ
