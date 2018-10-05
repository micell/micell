import dateFormat from '../../src/date/dateFormat';
import padStart from '../../src/_internal/padStart';

describe('date/dateFormat', () => {
  it('should throw error if the first parameter is not a Date object or number', () => {
    expect(() => {
      dateFormat();
    }).toThrow();
    expect(() => {
      dateFormat('');
    }).toThrow();
  });

  it('should be as the timestamp value if the first parameter is a number', () => {
    const value = 0;
    const date = new Date(value);
    const hour = padStart(date.getHours(), 2, '0');
    expect(dateFormat(0, 'YYYY-MM-DDTHH:mm:ss.SSSZ')).toBe(`1970-01-01T${hour}:00:00.000Z`);
  });

  it('should return the expected format string if the first parameter is a Date object', () => {
    const date = new Date('1970-01-01T00:00:00.000Z');
    const hour = padStart(date.getHours(), 2, '0');
    expect(dateFormat(date, 'YYYY-MM-DDTHH:mm:ss.SSSZ')).toBe(`1970-01-01T${hour}:00:00.000Z`);
  });

  it('should return the UTC format string if the third paramter is truth value', () => {
    const date = new Date('1970-01-01T00:00:00.000Z');
    expect(dateFormat(date, 'YYYY-MM-DDTHH:mm:ss.SSSZ', true)).toBe('1970-01-01T00:00:00.000Z');
  });
});
