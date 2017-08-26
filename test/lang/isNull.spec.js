import isNull from '../../src/lang/isNull';

describe('lang/isNull', () => {
  it('should return true', () => {
    expect(isNull(null)).toBe(true);
  });

  it('should return false', () => {
    expect(isNull({})).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull('')).toBe(false);
    expect(isNull(undefined)).toBe(false);
  });
});
