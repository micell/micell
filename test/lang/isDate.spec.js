import isDate from '../../src/lang/isDate';

describe('lang/isDate', () => {
  it('should return true', () => {
    expect(isDate(new Date())).toBe(true);
  });

  it('should return false', () => {
    expect(isDate({})).toBe(false);
    expect(isDate(0)).toBe(false);
    expect(isDate('')).toBe(false);
  });
});
