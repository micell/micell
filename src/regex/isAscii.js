import isString from '../lang/isString';
import reAscii from './ascii';

const isAscii = string => isString(string) && reAscii.test(string);

export default isAscii;
