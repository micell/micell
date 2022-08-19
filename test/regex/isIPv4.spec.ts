import { expect } from 'chai'
import isIPv4 from '../../src/regex/isIPv4'

describe('regex/isIPv4', () => {
  const ipv4Strings = ['0.0.0.0', '10.255.255.255']
  const notIpv4Strings = [
    '',
    '0.0.0.0.',
    '0. 0.0.0',
    '10.255.255.256',
    '10.10.10.00',
  ]

  it('should be an IPv4 string', () => {
    ipv4Strings.forEach((str) => {
      expect(isIPv4(str)).to.equal(true)
    })
  })

  it('should not be an IPv4 string', () => {
    notIpv4Strings.forEach((str) => {
      expect(isIPv4(str)).to.equal(false)
    })
  })
})
