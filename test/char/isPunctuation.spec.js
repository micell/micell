import isPunctuation from '../../src/char/isPunctuation';

describe('char/isPunctuation', () => {
  const chars = [];

  beforeAll(() => {
    for (let i = 33; i <= 47; i++) {
      chars.push(String.fromCharCode(i));
    }
    for (let i = 58; i <= 64; i++) {
      chars.push(String.fromCharCode(i));
    }
    for (let i = 91; i <= 96; i++) {
      chars.push(String.fromCharCode(i));
    }
    for (let i = 123; i <= 126; i++) {
      chars.push(String.fromCharCode(i));
    }
  });

  it('should return true', () => {
    const result = chars.every(ch => isPunctuation(ch));
    expect(result).toBe(true);
  });

  it('should return false', () => {
    expect(isPunctuation({})).toBe(false);
    expect(isPunctuation('')).toBe(false);
    expect(isPunctuation(null)).toBe(false);
    expect(isPunctuation(undefined)).toBe(false);
  });
});
