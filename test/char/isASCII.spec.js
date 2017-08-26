import isASCII from '../../src/char/isASCII';

describe('char/isASCII', () => {
  const asciiChars = [];

  beforeAll(() => {
    for (let i = 0; i <= 127; i++) {
      asciiChars.push(String.fromCharCode(i));
    }
  });

  it('should return true', () => {
    const result = asciiChars.every(ch => isASCII(ch));
    expect(result).toBe(true);
  });

  it('should return false', () => {
    expect(isASCII({})).toBe(false);
    expect(isASCII('')).toBe(false);
    expect(isASCII(null)).toBe(false);
    expect(isASCII(undefined)).toBe(false);
  });
});
