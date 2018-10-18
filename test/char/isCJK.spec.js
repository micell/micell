import isCJK from '../../src/char/isCJK';

// Todo: Need to test all cjk characters?
const cjkChars = ['你', '，', '阝', 'た', '너'];

describe('char/isCJK', () => {
  it('should return true', () => {
    const result = cjkChars.every(ch => isCJK(ch));
    expect(result).toBe(true);
  });

  it('should return false', () => {
    expect(isCJK({})).toBe(false);
    expect(isCJK('a')).toBe(false);
    expect(isCJK('1')).toBe(false);
    expect(isCJK('.')).toBe(false);
    expect(isCJK('')).toBe(false);
    expect(isCJK(null)).toBe(false);
    expect(isCJK(undefined)).toBe(false);
  });
});
