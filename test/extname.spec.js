import { extname } from '../src';

describe('extname', () => {
  it('should return the extension of the path', () => {
    expect(extname('hello.md')).toBe('.md');
    expect(extname('app.min.js')).toBe('.js');
  });

  it('should return the empty string if there isn\'t a `.` (period) character in the path', () => {
    expect(extname('hello')).toBe('');
  });
});

