import isString from '../lang/isString';
import reHsla from './hsla';

const isHsla = string => isString(string) && reHsla.test(string);

export default isHsla;
