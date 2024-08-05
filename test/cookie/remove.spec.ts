import { describe, expect, it } from 'vitest'
import get from '../../src/cookie/get'
import remove from '../../src/cookie/remove'

describe('cookie/remove', () => {
  it('should return null when remove "removeKey" cookie', () => {
    document.cookie = 'removeKey=removeValue;path=/'
    remove('removeKey')
    expect(get('removeKey')).to.equal(null)
  })

  it('should remove the cookie under the specified path', () => {
    document.cookie = 'pathCookie=pathCookie;'
    let path = location.pathname
    const lastSlashIndex = path.lastIndexOf('/')
    if (lastSlashIndex > -1) {
      path = path.slice(0, lastSlashIndex)
    }
    remove('pathCookie', {
      path: path || '/',
    })
    expect(get('pathCookie')).to.equal(null)
  })
})
