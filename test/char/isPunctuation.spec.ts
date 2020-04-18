import { expect } from 'chai'
import isPunctuation from '../../src/char/isPunctuation'

describe('char/isPunctuation', () => {
  const chars: Array<string> = []

  before(() => {
    for (let i = 33; i <= 47; i++) {
      chars.push(String.fromCharCode(i))
    }
    for (let i = 58; i <= 64; i++) {
      chars.push(String.fromCharCode(i))
    }
    for (let i = 91; i <= 96; i++) {
      chars.push(String.fromCharCode(i))
    }
    for (let i = 123; i <= 126; i++) {
      chars.push(String.fromCharCode(i))
    }
  })

  it('should return true', () => {
    const result = chars.every(ch => isPunctuation(ch))
    expect(result).to.equal(true)
  })

  it('should return false', () => {
    // @ts-ignore
    expect(isPunctuation({})).to.equal(false)
    // @ts-ignore
    expect(isPunctuation('')).to.equal(false)
    // @ts-ignore
    expect(isPunctuation(null)).to.equal(false)
    // @ts-ignore
    expect(isPunctuation(undefined)).to.equal(false)
  })
})
