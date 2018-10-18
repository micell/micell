import isString from '../lang/isString';
import reIPv4 from './ipv4';

const isIPv4 = string => isString(string) && reIPv4.test(string);

export default isIPv4;
