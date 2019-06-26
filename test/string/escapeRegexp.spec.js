import escapeRegexp from '../../src/string/escapeRegexp'

describe('dirname', () => {
  const specialChars = '.*+?^$|[](){}\\-'
  const escapedSpecialChars = '\\.\\*\\+\\?\\^\\$\\|\\[\\]\\(\\)\\{\\}\\\\\\-'

  it('should escape the special characters', () => {
    expect(escapeRegexp(specialChars)).to.equal(escapedSpecialChars)
  })
})
