import isString from '../lang/isString';
import isCJK from '../char/isCJK';

export default function count(str, type = 0) {
  if (!isString(str)) {
    throw new TypeError('the first argument must be a string');
  }
  const len = str.length;
  let num = 0;
  let fullCount = 0;
  let halfCount = 0;

  if (type === 1 || type === 2) {
    for (let i = 0; i < len; i++) {
      if (isCJK(str.charAt(i))) {
        fullCount++;
      } else {
        halfCount++;
      }
    }
  }
  if (type === 1) {
    num = fullCount * 2 + halfCount;
  } else if (type === 2) {
    num = fullCount + Math.ceil(halfCount / 2);
  } else {
    num = len;
  }
  return num;
}
