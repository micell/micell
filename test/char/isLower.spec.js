import isLower from '../../src/char/isLower';

describe('char/isLower', () => {
  const chars = [];

  beforeAll(() => {
    for (let i = 97; i <= 122; i++) {
      chars.push(String.fromCharCode(i));
    }
  });

  it('should return true', () => {
    const result = chars.every(ch => isLower(ch));
    expect(result).toBe(true);
  });

  it('should return false', () => {
    expect(isLower({})).toBe(false);
    expect(isLower('')).toBe(false);
    expect(isLower(null)).toBe(false);
    expect(isLower(undefined)).toBe(false);
  });
});
