import isError from '../../src/lang/isError';

describe('lang/isError', () => {
  it('should return true', () => {
    expect(isError(new Error())).toBe(true);
    expect(isError(new EvalError())).toBe(true);
    expect(isError(new RangeError())).toBe(true);
    expect(isError(new ReferenceError())).toBe(true);
    expect(isError(new SyntaxError())).toBe(true);
    expect(isError(new TypeError())).toBe(true);
    expect(isError(new URIError())).toBe(true);
  });

  it('should return false', () => {
    expect(isError({})).toBe(false);
    expect(isError(null)).toBe(false);
    expect(isError(undefined)).toBe(false);
  });
});
