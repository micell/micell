import isRegExp from '../../src/lang/isRegExp';

describe('lang/isRegExp', () => {
  it('primitive', () => {
    expect(isRegExp(/a/)).toBe(true);
  });

  it('wrapper object', () => {
    expect(isRegExp(new RegExp('a'))).toBe(true);
  });

  it('should return false', () => {
    expect(isRegExp({})).toBe(false);
    expect(isRegExp(0)).toBe(false);
    expect(isRegExp('')).toBe(false);
    expect(isRegExp(null)).toBe(false);
    expect(isRegExp(undefined)).toBe(false);
  });
});
