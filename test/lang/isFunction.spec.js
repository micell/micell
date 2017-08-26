import isFunction from '../../src/lang/isFunction';

describe('lang/isFunction', () => {
  it('function declaration', () => {
    function foo() {}
    expect(isFunction(foo)).toBe(true);
  });

  it('function expresstion', () => {
    const foo = function () {};
    expect(isFunction(foo)).toBe(true);
  });

  it('arrow function', () => {
    const foo = () => {};
    expect(isFunction(foo)).toBe(true);
  });

  it('generator function', () => {
    function* foo() { yield 0; }
    expect(isFunction(foo)).toBe(true);
  });

  it('async function', () => {
    async function foo() { return 0; }
    expect(isFunction(foo)).toBe(true);
  });

  it('other types should return false', () => {
    expect(isFunction({})).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction(null)).toBe(false);
  });
});
