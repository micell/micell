import get from '../../src/cookie/get'
import getRaw from '../../src/cookie/getRaw'
import set from '../../src/cookie/set'

describe('cookie/set', () => {
  it('should return the set cookie value', () => {
    set('someKey', 'someValue')
    expect(get('someKey')).to.equal('someValue')
  })

  it('should return the decoded value', () => {
    const github = 'https://github.com'
    set('github', github)
    expect(getRaw('github')).to.equal(encodeURIComponent(github))

    const micellar = 'https://github.com/Alex1990/micellar'
    set('micellar', micellar, { expires: 7 })
    expect(getRaw('micellar')).to.equal(encodeURIComponent(micellar))
  })

  it('should return the value without encoding if the 4th parameter is true', () => {
    const key = 'withoutEncoding'
    const value = 'https://github.com'
    set(key, value, null, null)
    expect(getRaw(key)).to.equal(value)
  })

  it('should return null when cookie path is restricted', () => {
    set('path_cookie', 'some_value', { path: '/the-other-path/' })
    expect(get('path_cookie')).to.equal(null)
  })
})
