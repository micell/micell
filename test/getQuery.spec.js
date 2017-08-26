import { getQuery } from '../src';

describe('getQuery', () => {
  it('single query name', () => {
    const query = '?foo=bar';
    expect(getQuery('foo', { query })).toBe('bar');
  });

  it('multiple query names', () => {
    const query = '?foo=Foo&bar=Bar&baz=Baz';
    expect(getQuery('foo', { query })).toBe('Foo');
    expect(getQuery('bar', { query })).toBe('Bar');
    expect(getQuery('baz', { query })).toBe('Baz');
  });

  it('multiple query values', () => {
    const query = '?lang=HTML&lang=CSS&lang=JavaScript';
    expect(getQuery('lang', { query })).toEqual(['HTML', 'CSS', 'JavaScript']);
  });

  it('should decode the encoded value', () => {
    const query1 = '?foo=hello%20world';
    const query2 = '?url=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dmicellar';
    const query3 = '?foo=hello%20world&bar=hello%20world';

    expect(getQuery('foo', { query: query1 })).toBe('hello world');
    expect(getQuery('url', { query: query2 }))
      .toBe('https://www.google.com/search?q=micellar');
    expect(getQuery('foo', { query: query3 })).toBe('hello world');
    expect(getQuery('bar', { query: query3 })).toBe('hello world');
  });


  it('should handle the query string without the leading question mark', () => {
    const query = 'foo=bar';
    expect(getQuery('foo', { query })).toBe('bar');
  });

  it('should return string value for the numeric string', () => {
    const query = '?foo=42';
    expect(getQuery('foo', { query })).toBe('42');
  });

  // Todo: default query parameter
});
