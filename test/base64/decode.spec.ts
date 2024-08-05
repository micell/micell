import { describe, expect, it } from 'vitest'
import decode from '../../src/base64/decode'
import utf8ToBytes from '../../src/_internal/utf8ToBytes'
import bytesToHex from '../../src/_internal/bytesToHex'

describe('base64/decode', () => {
  const data = [
    {
      // empty string
      input: '',
      output: '',
    },
    {
      // padding = 1
      input: 'YW55IGNhcm5hbCBwbGVhc3VyZS4=',
      output: 'any carnal pleasure.',
    },
    {
      // padding = 2
      input: 'YW55IGNhcm5hbCBwbGVhc3VyZQ==',
      output: 'any carnal pleasure',
    },
    {
      // padding = 0
      input: 'YW55IGNhcm5hbCBwbGVhc3Vy',
      output: 'any carnal pleasur',
    },
    {
      // unicode basic multilingual plane
      input: '5L2g5aW9',
      output: '你好',
    },
    {
      // unicode other planes
      input: '8J+YgA==',
      output: '😀',
    },
  ]

  it('return a utf8 string', () => {
    for (const datum of data) {
      expect(decode(datum.input)).to.equal(datum.output)
    }
  })

  it('reutrn a hex string', () => {
    for (const datum of data) {
      const expected = decode(datum.input, { encoding: 'hex' })
      const actual = bytesToHex(utf8ToBytes(datum.output))
      expect(expected).to.equal(actual)
    }
  })

  it('return a byte array', () => {
    for (const datum of data) {
      const expected = decode(datum.input, { encoding: 'binary' })
      const actual = utf8ToBytes(datum.output)
      expect(expected).to.eql(actual)
    }
  })

  it('should throw a TypeError', () => {
    // @ts-ignore
    const fn1 = () => decode()
    // @ts-ignore
    const fn2 = () => decode(1)
    expect(fn1).to.throw(TypeError)
    expect(fn2).to.throw(TypeError)
  })
})
