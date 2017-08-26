import { isValidJSON } from '../src';

describe('isValidJSON', () => {
  it('should return true if a valid JSON string is passed', () => {
    const validJson = '{ "a": [0, false] }';
    expect(isValidJSON(validJson)).toBe(true);
  });

  it('should return false if an invalid JSON string is passed', () => {
    const invalidJson = '{ a: [0, false] }';
    expect(isValidJSON(invalidJson)).toBe(false);
  });
});
