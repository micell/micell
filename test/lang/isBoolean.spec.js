import isBoolean from '../../src/lang/isBoolean';

describe('lang/isBoolean', () => {
  it('primitive', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });

  it('wrapper object', () => {
    /* eslint-disable  no-new-wrappers */
    expect(isBoolean(new Boolean(true))).toBe(true);
    expect(isBoolean(new Boolean(false))).toBe(true);
  });

  it('should return false', () => {
    expect(isBoolean({})).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean(0)).toBe(false);
  });
});
