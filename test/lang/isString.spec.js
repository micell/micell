import isString from '../../src/lang/isString';

describe('lang/isString', () => {
  it('primitive', () => {
    expect(isString('')).toBe(true);
    expect(isString('foo')).toBe(true);
  });

  it('wrapper object', () => {
    /* eslint-disable  no-new-wrappers */
    expect(isString(new String(''))).toBe(true);
    expect(isString(new String('foo'))).toBe(true);
  });

  it('should return false', () => {
    expect(isString({})).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(1)).toBe(false);
    expect(isString(0)).toBe(false);
  });
});
