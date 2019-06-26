import getQuery from '../src/getQuery'

describe('getQuery', () => {
  it('single query name', () => {
    const query = '?foo=bar'
    expect(getQuery('foo', { query })).to.equal('bar')
  })

  it('multiple query names', () => {
    const query = '?foo=Foo&bar=Bar&baz=Baz'
    expect(getQuery('foo', { query })).to.equal('Foo')
    expect(getQuery('bar', { query })).to.equal('Bar')
    expect(getQuery('baz', { query })).to.equal('Baz')
  })

  it('multiple query values', () => {
    const query = '?lang=HTML&lang=CSS&lang=JavaScript'
    expect(getQuery('lang', { query })).to.deep.equal(['HTML', 'CSS', 'JavaScript'])
  })

  it('should decode the encoded value', () => {
    const query1 = '?foo=hello%20world'
    const query2 = '?url=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dmicellar'
    const query3 = '?foo=hello%20world&bar=hello%20world'

    expect(getQuery('foo', { query: query1 })).to.equal('hello world')
    expect(getQuery('url', { query: query2 }))
      .to.equal('https://www.google.com/search?q=micellar')
    expect(getQuery('foo', { query: query3 })).to.equal('hello world')
    expect(getQuery('bar', { query: query3 })).to.equal('hello world')
  })

  it('should handle the query string without the leading question mark', () => {
    const query = 'foo=bar'
    expect(getQuery('foo', { query })).to.equal('bar')
  })

  it('should return string value for the numeric string', () => {
    const query = '?foo=42'
    expect(getQuery('foo', { query })).to.equal('42')
  })

  // Todo: default query parameter
})
