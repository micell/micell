import isString from '../lang/isString';

const isGraph = (ch) => {
  if (isString(ch) && ch.length === 1) {
    const charCode = ch.charCodeAt(0);
    return charCode >= 33 && charCode <= 126;
  }
  return false;
};

export default isGraph;
