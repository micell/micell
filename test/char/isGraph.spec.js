import isGraph from '../../src/char/isGraph';

describe('char/isGraph', () => {
  const chars = [];

  beforeAll(() => {
    for (let i = 33; i <= 126; i++) {
      chars.push(String.fromCharCode(i));
    }
  });

  it('should return true', () => {
    const result = chars.every(ch => isGraph(ch));
    expect(result).toBe(true);
  });

  it('should return false', () => {
    expect(isGraph({})).toBe(false);
    expect(isGraph('')).toBe(false);
    expect(isGraph(null)).toBe(false);
    expect(isGraph(undefined)).toBe(false);
  });
});
