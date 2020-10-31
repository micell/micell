import { expect } from 'chai'
import format from '../../src/date/format'
import padStart from '../../src/_internal/padStart'

describe('date/format', () => {
  // Because of ts type check, the below test case is commented.
  // it('should throw error if the first parameter is not one of number or string or Date object', () => {
  //   expect(() => {
  //     format()
  //   }).to.throw()
  //   expect(() => {
  //     format('')
  //   }).to.throw()
  // })

  it('should be as the timestamp value if the first parameter is a number', () => {
    const value = 0
    const date = new Date(value)
    const hours = padStart(date.getHours(), 2, '0')
    const minutes = padStart(date.getMinutes(), 2, '0')
    expect(format(0, 'YYYY-MM-DDTHH:mm:ss.SSSZ')).to.equal(`1970-01-01T${hours}:${minutes}:00.000Z`)
  })

  it('should be as the timestamp value if the first parameter is a parsable date string', () => {
    const values = [
      '1970-01-01',
      'January 1, 1970 00:00:00'
    ]
    for (const value of values) {
      const date = new Date(value)
      expect(format(value, 'YYYY-MM-DDTHH:mm:ss.SSSZ', true)).to.equal(date.toISOString())
    }
  })

  it('should return the expected format string if the first parameter is a Date object', () => {
    const date = new Date('1970-01-01T00:00:00.000Z')
    const hours = padStart(date.getHours(), 2, '0')
    const minutes = padStart(date.getMinutes(), 2, '0')
    expect(format(date, 'YYYY-MM-DDTHH:mm:ss.SSSZ')).to.equal(`1970-01-01T${hours}:${minutes}:00.000Z`)
  })

  it('should return the UTC format string if the third paramter is truth value', () => {
    const date = new Date('1970-01-01T00:00:00.000Z')
    expect(format(date, 'YYYY-MM-DDTHH:mm:ss.SSSZ', true)).to.equal('1970-01-01T00:00:00.000Z')
  })
})
