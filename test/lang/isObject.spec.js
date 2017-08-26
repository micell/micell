import isObject from '../../src/lang/isObject';

describe('lang/isObject', () => {
  it('should return true', () => {
    expect(isObject({})).toBe(true);
  });

  it('null should return false', () => {
    expect(isObject(null)).toBe(false);
  });

  it('array should return false', () => {
    expect(isObject([])).toBe(false);
  });

  it('wrapper object should return false', () => {
    /* eslint-disable  no-new-wrappers */
    expect(isObject(new String('a'))).toBe(false);
  });
});
