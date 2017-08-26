import isSpace from '../../src/char/isSpace';

describe('char/isSpace', () => {
  const chars = [];

  beforeAll(() => {
    for (let i = 9; i <= 13; i++) {
      chars.push(String.fromCharCode(i));
    }
    chars.push(String.fromCharCode(32));
  });

  it('should return true', () => {
    const result = chars.every(ch => isSpace(ch));
    expect(result).toBe(true);
  });

  it('Non-ASCII white spaces should return false', () => {
    // &nbsp;
    expect(isSpace(String.fromCharCode(160))).toBe(false);
  });

  it('should return false', () => {
    expect(isSpace({})).toBe(false);
    expect(isSpace('')).toBe(false);
    expect(isSpace(null)).toBe(false);
    expect(isSpace(undefined)).toBe(false);
  });
});
