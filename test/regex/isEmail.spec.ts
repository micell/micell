import { describe, expect, it } from 'vitest'
import isEmail from '../../src/regex/isEmail'

describe('regex/isEmail', () => {
  const emailStrings = [
    'a@b.c',
    'Aa1@example.com',
    'a.b@example.com',
    'a+b@example.com',
    'aaa@163.com',
  ]
  const notEmailStrings = ['a', 'a@', '@a', '@a.com']

  it('should be an email string', () => {
    emailStrings.forEach((str) => {
      expect(isEmail(str)).to.equal(true)
    })
  })

  it('should not be an email string', () => {
    notEmailStrings.forEach((str) => {
      expect(isEmail(str)).to.equal(false)
    })
  })
})
