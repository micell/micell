import isDigit from '../../src/char/isDigit';

describe('char/isDigit', () => {
  const chars = [];

  beforeAll(() => {
    for (let i = 48; i <= 57; i++) {
      chars.push(String.fromCharCode(i));
    }
  });

  it('should return true', () => {
    const result = chars.every(ch => isDigit(ch));
    expect(result).toBe(true);
  });

  it('should return false', () => {
    expect(isDigit({})).toBe(false);
    expect(isDigit('')).toBe(false);
    expect(isDigit(null)).toBe(false);
    expect(isDigit(undefined)).toBe(false);
  });
});
