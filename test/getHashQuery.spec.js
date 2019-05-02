import { getHashQuery } from '../src';

describe('getHashQuery', () => {
  it('should return undefined when the query name is not exist', () => {
    window.location.hash = '';
    expect(getHashQuery('foo')).toBe(undefined);
  });

  it('should return the query value', () => {
    window.location.hash = '#?foo=Foo';
    expect(getHashQuery('foo')).toBe('Foo');
  });

  it('should return the query value', () => {
    window.location.hash = '#foo=Foo';
    expect(getHashQuery('foo')).toBe('Foo');
  });

  it('multiple query names', () => {
    window.location.hash = '#?foo=Foo&bar=Bar';
    expect(getHashQuery('foo')).toBe('Foo');
    expect(getHashQuery('bar')).toBe('Bar');
  });

  it('should return the empty string', () => {
    window.location.hash = '#?foo';
    expect(getHashQuery('foo')).toBe('');
  });
});
