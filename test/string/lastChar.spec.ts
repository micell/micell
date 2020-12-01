import { expect } from 'chai'
import lastChar from '../../src/string/lastChar'

describe('lastChar', () => {
  it('should return the last character', () => {
    expect(lastChar('hello')).to.equal('o')
    expect(lastChar('你好')).to.equal('好')
    // expect(lastChar('👍👍')).to.equal('👍')
  })

  it('should throw an error if the first parameter is not a string', () => {
    // @ts-ignore
    const fn = () => lastChar(123)
    expect(fn).to.throw()
  })
})
