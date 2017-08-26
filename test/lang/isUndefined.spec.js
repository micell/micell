import isUndefined from '../../src/lang/isUndefined';

describe('lang/isUndefined', () => {
  it('should return true', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it('should return false', () => {
    expect(isUndefined({})).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined('')).toBe(false);
    expect(isUndefined(null)).toBe(false);
  });
});
