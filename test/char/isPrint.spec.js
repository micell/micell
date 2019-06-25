import isPrint from '../../src/char/isPrint';

describe('char/isPrint', () => {
  const chars = [];

  before(() => {
    for (let i = 32; i <= 126; i++) {
      chars.push(String.fromCharCode(i));
    }
  });

  it('should return true', () => {
    const result = chars.every(ch => isPrint(ch));
    expect(result).to.equal(true);
  });

  it('should return false', () => {
    expect(isPrint({})).to.equal(false);
    expect(isPrint('')).to.equal(false);
    expect(isPrint(null)).to.equal(false);
    expect(isPrint(undefined)).to.equal(false);
  });
});
