import isControl from '../../src/char/isControl';

describe('char/isControl', () => {
  const chars = [];

  beforeAll(() => {
    for (let i = 0; i <= 31; i++) {
      chars.push(String.fromCharCode(i));
    }
    chars.push(String.fromCharCode(127));
  });

  it('should return true', () => {
    const result = chars.every(ch => isControl(ch));
    expect(result).toBe(true);
  });

  it('should return false', () => {
    expect(isControl({})).toBe(false);
    expect(isControl('')).toBe(false);
    expect(isControl(null)).toBe(false);
    expect(isControl(undefined)).toBe(false);
  });
});
