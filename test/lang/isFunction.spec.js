import isFunction from '../../src/lang/isFunction';

describe('lang/isFunction', () => {
  it('function declaration', () => {
    function foo() {}
    expect(isFunction(foo)).to.equal(true);
  });

  it('function expresstion', () => {
    const foo = function () {};
    expect(isFunction(foo)).to.equal(true);
  });

  it('arrow function', () => {
    const foo = () => {};
    expect(isFunction(foo)).to.equal(true);
  });

  it('generator function', () => {
    function* foo() { yield 0; }
    expect(isFunction(foo)).to.equal(true);
  });

  it('async function', () => {
    async function foo() { return 0; }
    expect(isFunction(foo)).to.equal(true);
  });

  it('other types should return false', () => {
    expect(isFunction({})).to.equal(false);
    expect(isFunction(undefined)).to.equal(false);
    expect(isFunction(null)).to.equal(false);
  });
});
