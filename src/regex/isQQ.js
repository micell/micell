import isString from '../lang/isString';
import reQQ from './qq';

const isQQ = string => isString(string) && reQQ.test(string);

export default isQQ;
