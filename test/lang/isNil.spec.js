import isNil from '../../src/lang/isNil';

describe('lang/isNil', () => {
  it('should return true', () => {
    expect(isNil(undefined)).toBe(true);
    expect(isNil(null)).toBe(true);
  });

  it('should return false', () => {
    expect(isNil({})).toBe(false);
    expect(isNil(0)).toBe(false);
    expect(isNil('')).toBe(false);
    expect(isNil(false)).toBe(false);
  });
});
