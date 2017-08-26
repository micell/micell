import isNumber from '../../src/lang/isNumber';

describe('lang/isNumber', () => {
  it('primitive', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-1)).toBe(true);
    expect(isNumber(1.1)).toBe(true);
    expect(isNumber(1.1e5)).toBe(true);
    expect(isNumber(1.1e-5)).toBe(true);
    expect(isNumber(NaN)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber(-Infinity)).toBe(true);
  });

  it('wrapper object', () => {
    /* eslint-disable  no-new-wrappers */
    expect(isNumber(new Number(1))).toBe(true);
    expect(isNumber(new Number(-1.1))).toBe(true);
  });

  it('should return false', () => {
    expect(isNumber({})).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
  });
});
