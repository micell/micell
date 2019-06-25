import isCJK from '../../src/char/isCJK';

// Todo: Need to test all cjk characters?
const cjkChars = ['你', '，', '阝', 'た', '너'];

describe('char/isCJK', () => {
  it('should return true', () => {
    const result = cjkChars.every(ch => isCJK(ch));
    expect(result).to.equal(true);
  });

  it('should return false', () => {
    expect(isCJK({})).to.equal(false);
    expect(isCJK('a')).to.equal(false);
    expect(isCJK('1')).to.equal(false);
    expect(isCJK('.')).to.equal(false);
    expect(isCJK('')).to.equal(false);
    expect(isCJK(null)).to.equal(false);
    expect(isCJK(undefined)).to.equal(false);
  });
});
