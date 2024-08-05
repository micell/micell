import { describe, expect, it } from 'vitest'
import countLines from '../../src/string/countLines'

describe('countLines', () => {
  it('should return 0 if the input is an empty string', () => {
    expect(countLines('')).to.equal(0)
  })

  it('should return the number of lines of the passed text', () => {
    const text1 = 'hello\nworld'
    const text2 = 'hello\nworld\n'
    expect(countLines(text1)).to.equal(2)
    expect(countLines(text2)).to.equal(2)
  })

  it('can specify the newline character', () => {
    const winText = 'hello\r\nworld\r\n'
    const macText = 'hello\rworld\r'
    expect(countLines(winText, '\r\n')).to.equal(2)
    expect(countLines(macText, '\r')).to.equal(2)
  })
})
