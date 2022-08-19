import { expect } from 'chai'
import isDomain from '../../src/regex/isDomain'

describe('regex/isDomain', () => {
  const domainStrings = ['example.com', 'www.example.com', '你好.中国']
  const notDomainStrings = [
    'com',
    'http://com',
    'http://example.com',
    'https://example.com',
  ]

  it('should be a domain string', () => {
    domainStrings.forEach((str) => {
      expect(isDomain(str)).to.equal(true)
    })
  })

  it('should not be a domain string', () => {
    notDomainStrings.forEach((str) => {
      expect(isDomain(str)).to.equal(false)
    })
  })
})
