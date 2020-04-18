import { expect } from 'chai'
import isPrint from '../../src/char/isPrint'

describe('char/isPrint', () => {
  const chars: Array<string> = []

  before(() => {
    for (let i = 32; i <= 126; i++) {
      chars.push(String.fromCharCode(i))
    }
  })

  it('should return true', () => {
    const result = chars.every(ch => isPrint(ch))
    expect(result).to.equal(true)
  })

  it('should return false', () => {
    // @ts-ignore
    expect(isPrint({})).to.equal(false)
    // @ts-ignore
    expect(isPrint('')).to.equal(false)
    // @ts-ignore
    expect(isPrint(null)).to.equal(false)
    // @ts-ignore
    expect(isPrint(undefined)).to.equal(false)
  })
})
