import { describe, expect, it } from 'vitest'
import get from '../../src/qs/get'

describe('qs/get', () => {
  it('none query', () => {
    expect(get('foo', '')).to.equal(undefined)
  })

  it('single query name', () => {
    expect(get('foo', 'foo=1')).to.equal('1')
  })

  it('empty string value', () => {
    expect(get('foo', 'foo')).to.equal('')
    expect(get('foo', 'foo=')).to.equal('')
  })

  it('leading question mark', () => {
    expect(get('foo', '?foo=1')).to.equal('1')
  })

  it('multiple query pairs', () => {
    expect(get('foo', 'foo=1&bar=2')).to.equal('1')
    expect(get('bar', 'foo=1&bar=2&baz=3')).to.equal('2')
  })

  it('should decode query name and value', () => {
    expect(get('foo', 'foo=hello%20world')).to.equal('hello world')
    expect(get('foo bar', 'foo%20bar=1')).to.equal('1')
    expect(get('foo bar', 'foo%20bar=hello%20world')).to.equal('hello world')
  })

  it('multiple query pairs with the same name', () => {
    expect(get('lang', 'lang[]')).to.deep.equal([''])
    expect(get('lang', 'lang[]=')).to.deep.equal([''])
    expect(get('lang', 'lang=HTML&lang=CSS&lang=JavaScript')).to.deep.equal([
      'HTML',
      'CSS',
      'JavaScript',
    ])
    expect(
      get('lang', 'lang[]=HTML&lang[]=CSS&lang[]=JavaScript'),
    ).to.deep.equal(['HTML', 'CSS', 'JavaScript'])
  })
})
