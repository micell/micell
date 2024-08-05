import { describe, expect, it } from 'vitest'
import isIPv6 from '../../src/regex/isIPv6'

describe('regex/isIPv6', () => {
  const ipv6Strings = [
    '::1',
    '2001:0db8:0000:0000:0000:ff00:0042:8329',
    '2001:db8:0:0:0:ff00:42:8329',
    '2001:db8::ff00:42:8329',
  ]
  const notIpv6Strings = ['', '0.0.0.0.']

  it('should be an IPv6 string', () => {
    ipv6Strings.forEach((str) => {
      expect(isIPv6(str)).to.equal(true)
    })
  })

  it('should not be an IPv6 string', () => {
    notIpv6Strings.forEach((str) => {
      expect(isIPv6(str)).to.equal(false)
    })
  })
})
