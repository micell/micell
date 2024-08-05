import { describe, expect, it } from 'vitest'
import parse from '../../src/qs/parse'

describe('qs/parse', () => {
  it('the default argument should be an empty string', () => {
    // @ts-ignore
    expect(parse()).to.deep.equal({})
  })

  it('empty query string', () => {
    expect(parse('')).to.deep.equal({})
  })

  it('single query pair', () => {
    expect(parse('foo')).to.deep.equal({ foo: '' })
    expect(parse('foo=')).to.deep.equal({ foo: '' })
    expect(parse('foo=1')).to.deep.equal({ foo: '1' })
  })

  it('leading question mark', () => {
    expect(parse('?foo=1')).to.deep.equal({ foo: '1' })
  })

  it('multiple query pairs', () => {
    expect(parse('foo=1&bar=2')).to.deep.equal({ foo: '1', bar: '2' })
    expect(parse('foo=1&bar=2&baz=3')).to.deep.equal({
      foo: '1',
      bar: '2',
      baz: '3',
    })
  })

  it('should decode query name and value', () => {
    expect(parse('foo=hello%20world')).to.deep.equal({ foo: 'hello world' })
    expect(parse('foo%20bar=1')).to.deep.equal({ 'foo bar': '1' })
    expect(parse('foo%20bar=hello%20world')).to.deep.equal({
      'foo bar': 'hello world',
    })
  })

  it('multiple query pairs with the same name', () => {
    expect(parse('lang[]')).to.deep.equal({ lang: [''] })
    expect(parse('lang[]=')).to.deep.equal({ lang: [''] })
    expect(parse('lang=HTML&lang=CSS&lang=JavaScript')).to.deep.equal({
      lang: ['HTML', 'CSS', 'JavaScript'],
    })
    expect(parse('lang[]=HTML&lang[]=CSS&lang[]=JavaScript')).to.deep.equal({
      lang: ['HTML', 'CSS', 'JavaScript'],
    })
  })
})
