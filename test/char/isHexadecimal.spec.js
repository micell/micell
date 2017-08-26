import isHexadecimal from '../../src/char/isHexadecimal';

describe('char/isHexadecimal', () => {
  const chars = [];

  beforeAll(() => {
    for (let i = 48; i <= 57; i++) {
      chars.push(String.fromCharCode(i));
    }
    for (let i = 65; i <= 70; i++) {
      chars.push(String.fromCharCode(i));
    }
    for (let i = 97; i <= 102; i++) {
      chars.push(String.fromCharCode(i));
    }
  });

  it('should return true', () => {
    const result = chars.every(ch => isHexadecimal(ch));
    expect(result).toBe(true);
  });

  it('should return false', () => {
    expect(isHexadecimal({})).toBe(false);
    expect(isHexadecimal('')).toBe(false);
    expect(isHexadecimal(null)).toBe(false);
    expect(isHexadecimal(undefined)).toBe(false);
  });
});
