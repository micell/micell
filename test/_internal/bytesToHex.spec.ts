import { expect } from 'chai'
import bytesToHex from '../../src/_internal/bytesToHex'

describe('_internal/bytesToHex', () => {
  it('should return an empty string for empty array', () => {
    expect(bytesToHex([])).to.equal('')
  })

  it('should return hex string of the bytes', () => {
    expect(bytesToHex([104, 101, 108, 108, 111])).to.equal('68656c6c6f')
  })

  it('should map the out of range 0-255 to range 0-255', () => {
    expect(bytesToHex([-1, 256])).to.equal('ff00')
  })
})
