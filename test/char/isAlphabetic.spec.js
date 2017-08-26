import isAlphabetic from '../../src/char/isAlphabetic';

describe('char/isAlphabetic', () => {
  const chars = [];

  beforeAll(() => {
    for (let i = 65; i <= 90; i++) {
      chars.push(String.fromCharCode(i));
    }
    for (let i = 97; i <= 122; i++) {
      chars.push(String.fromCharCode(i));
    }
  });

  it('should return true', () => {
    const result = chars.every(ch => isAlphabetic(ch));
    expect(result).toBe(true);
  });

  it('should return false', () => {
    expect(isAlphabetic({})).toBe(false);
    expect(isAlphabetic('')).toBe(false);
    expect(isAlphabetic(null)).toBe(false);
    expect(isAlphabetic(undefined)).toBe(false);
  });
});

