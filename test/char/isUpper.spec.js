import isUpper from '../../src/char/isUpper';

describe('char/isUpper', () => {
  const chars = [];

  beforeAll(() => {
    for (let i = 65; i <= 90; i++) {
      chars.push(String.fromCharCode(i));
    }
  });

  it('should return true', () => {
    const result = chars.every(ch => isUpper(ch));
    expect(result).toBe(true);
  });

  it('should return false', () => {
    expect(isUpper({})).toBe(false);
    expect(isUpper('')).toBe(false);
    expect(isUpper(null)).toBe(false);
    expect(isUpper(undefined)).toBe(false);
  });
});
