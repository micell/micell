import { randomString } from '../src';

describe('randomString', () => {
  it('first parameter', () => {
    expect(randomString().length).toBe(32);
    expect(randomString(0).length).toBe(32);
    expect(randomString(undefined).length).toBe(32);
    expect(randomString(undefined, '0').length).toBe(32);
    expect(randomString(8).length).toBe(8);
    expect(randomString(128).length).toBe(128);
  });

  it('second paramater', () => {
    expect(randomString(4, '0')).toBe('0000');
    expect(randomString(8, '0123456789')).toMatch(/^\d+$/);
    expect(randomString(8, 'abc123')).toMatch(/^[abc123]+$/);
  });
});
