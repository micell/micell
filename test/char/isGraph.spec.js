import isGraph from '../../src/char/isGraph';

describe('char/isGraph', () => {
  const chars = [];

  before(() => {
    for (let i = 33; i <= 126; i++) {
      chars.push(String.fromCharCode(i));
    }
  });

  it('should return true', () => {
    const result = chars.every(ch => isGraph(ch));
    expect(result).to.equal(true);
  });

  it('should return false', () => {
    expect(isGraph({})).to.equal(false);
    expect(isGraph('')).to.equal(false);
    expect(isGraph(null)).to.equal(false);
    expect(isGraph(undefined)).to.equal(false);
  });
});
