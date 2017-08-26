import isArray from '../../src/lang/isArray';

describe('lang/isArray', () => {
  it('should return true', () => {
    expect(isArray([])).toBe(true);
  });

  it('should return false', () => {
    expect(isArray(new ArrayBuffer())).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(null)).toBe(false);
  });
});
