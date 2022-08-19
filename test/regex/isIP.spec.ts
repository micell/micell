import { expect } from 'chai'
import isIP from '../../src/regex/isIP'

describe('regex/isIP', () => {
  const ipStrings = [
    '0.0.0.0',
    '10.255.255.255',
    '::1',
    '2001:0db8:0000:0000:0000:ff00:0042:8329',
    '2001:db8:0:0:0:ff00:42:8329',
    '2001:db8::ff00:42:8329',
  ]
  const notIpStrings = ['', '0.0.0.0.', '0.0.0.0 ', '0. 0.0.0', ' ::1']

  it('should be an IP string', () => {
    ipStrings.forEach((str) => {
      expect(isIP(str)).to.equal(true)
    })
  })

  it('should not be an IP string', () => {
    notIpStrings.forEach((str) => {
      expect(isIP(str)).to.equal(false)
    })
  })
})
