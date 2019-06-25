import isSpace from '../../src/char/isSpace';

describe('char/isSpace', () => {
  const chars = [];

  before(() => {
    for (let i = 9; i <= 13; i++) {
      chars.push(String.fromCharCode(i));
    }
    chars.push(String.fromCharCode(32));
  });

  it('should return true', () => {
    const result = chars.every(ch => isSpace(ch));
    expect(result).to.equal(true);
  });

  it('Non-ASCII white spaces should return false', () => {
    // &nbsp;
    expect(isSpace(String.fromCharCode(160))).to.equal(false);
  });

  it('should return false', () => {
    expect(isSpace({})).to.equal(false);
    expect(isSpace('')).to.equal(false);
    expect(isSpace(null)).to.equal(false);
    expect(isSpace(undefined)).to.equal(false);
  });
});
