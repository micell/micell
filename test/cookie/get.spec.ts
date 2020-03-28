import { expect } from 'chai'
import get from '../../src/cookie/get'

describe('cookie/get', () => {
  it('should return null if the cookie key isn\'t exist', () => {
    expect(get('nokey')).to.equal(null)
  })

  // it('should return null if no parameter passed', () => {
  //   expect(get()).to.equal(null)
  // })

  it('should return "Bar" if "foo" passed', () => {
    document.cookie = 'foo=Bar'
    document.cookie = 'foofoo=BarBar'
    expect(get('foo')).to.equal('Bar')
  })

  it('should return the decoded string if cookie value is encoded', () => {
    const homepage = 'https://github.com/Alex1990'
    document.cookie = 'homepage=' + encodeURIComponent(homepage)
    expect(get('homepage')).to.equal(homepage)
  })

  // TODO: can not be passed by type check
  // it('should return the value without decoding if the 2nd parameter is true', () => {
  //   const key = 'withoutDecoding'
  //   const value = encodeURIComponent('https://github.com/Alex1990')
  //   document.cookie = key + '=' + value
  //   expect(get(key, true)).to.equal(value)
  // })

  it('should return right value if cookie key contains whitespace', () => {
    const key = 'he  llo'
    const value = 'world'
    document.cookie = key + '=' + value
    expect(get(key)).to.equal(value)
  })

  it('should return right value if cookie value contains whitespace', () => {
    const key = 'whitespacevalue'
    const value = 'va  lue'
    document.cookie = key + '=' + value
    expect(get(key)).to.equal(value)
  })

  it('should return null if empty string passed', () => {
    document.cookie = 'onlyvalue'
    expect(get('')).to.equal(null)

    document.cookie = '=tiny=cookie'
    expect(get('')).to.equal(null)
  })

  it('should return an empty string if only key is set', () => {
    document.cookie = 'onlykey='
    expect(get('onlykey')).to.equal('')
  })
})
