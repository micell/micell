import isPrint from '../../src/char/isPrint';

describe('char/isPrint', () => {
  const chars = [];

  beforeAll(() => {
    for (let i = 32; i <= 126; i++) {
      chars.push(String.fromCharCode(i));
    }
  });

  it('should return true', () => {
    const result = chars.every(ch => isPrint(ch));
    expect(result).toBe(true);
  });

  it('should return false', () => {
    expect(isPrint({})).toBe(false);
    expect(isPrint('')).toBe(false);
    expect(isPrint(null)).toBe(false);
    expect(isPrint(undefined)).toBe(false);
  });
});
