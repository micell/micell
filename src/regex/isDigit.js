import isString from '../lang/isString';
import reDigit from './digit';

const isDigit = string => isString(string) && reDigit.test(string);

export default isDigit;
