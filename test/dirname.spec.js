import { dirname } from '../src';

describe('dirname', () => {
  it('should return the directory name of a path', () => {
    expect(dirname('hello')).toBe('');
    expect(dirname('hello/world')).toBe('hello');
    expect(dirname('/hello/world')).toBe('/hello');
  });

  it('can use the second parameter to be the separator of the path', () => {
    expect(dirname('\\hello\\world', '\\')).toBe('\\hello');
  });
});

