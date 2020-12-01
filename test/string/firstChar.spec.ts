import { expect } from 'chai'
import firstChar from '../../src/string/firstChar'

describe('firstChar', () => {
  it('should return the first character', () => {
    expect(firstChar('hello')).to.equal('h')
    expect(firstChar('你好')).to.equal('你')
    // expect(firstChar('👍👍')).to.equal('👍')
  })

  it('should throw an error if the first parameter is not a string', () => {
    // @ts-ignore
    const fn = () => firstChar(123)
    expect(fn).to.throw()
  })
})
