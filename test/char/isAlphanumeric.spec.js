import isAlphanumeric from '../../src/char/isAlphanumeric';

describe('char/isAlphanumeric', () => {
  const chars = [];

  beforeAll(() => {
    for (let i = 48; i <= 57; i++) {
      chars.push(String.fromCharCode(i));
    }
    for (let i = 65; i <= 90; i++) {
      chars.push(String.fromCharCode(i));
    }
    for (let i = 97; i <= 122; i++) {
      chars.push(String.fromCharCode(i));
    }
  });

  it('should return true', () => {
    const result = chars.every(ch => isAlphanumeric(ch));
    expect(result).toBe(true);
  });

  it('should return false', () => {
    expect(isAlphanumeric({})).toBe(false);
    expect(isAlphanumeric('')).toBe(false);
    expect(isAlphanumeric(null)).toBe(false);
    expect(isAlphanumeric(undefined)).toBe(false);
  });
});
