import { expect } from 'chai'
import parse from '../../src/date/parse'

describe('date/format', () => {
  it('should throw error if the first parameter is not one of number or string or Date object', () => {
    expect(() => {
      // @ts-ignore
      parse()
    }).to.throw()
  })

  it('should parse the timestamp number right', () => {
    const d = new Date(0);
    expect(parse(0)).to.deep.equal({
      years: d.getFullYear(),
      months: d.getMonth(),
      dates: d.getDate(),
      hours: d.getHours(),
      minutes: d.getMinutes(),
      seconds: d.getSeconds(),
      milliseconds: d.getMilliseconds()
    })
  })

  it('should parse the parsable date string right', () => {
    const d = new Date(0);
    expect(parse('Thu, 01 Jan 1970 00:00:00 GMT')).to.deep.equal({
      years: d.getFullYear(),
      months: d.getMonth(),
      dates: d.getDate(),
      hours: d.getHours(),
      minutes: d.getMinutes(),
      seconds: d.getSeconds(),
      milliseconds: d.getMilliseconds()
    })
  })

  it('should parse the Date object right', () => {
    const d = new Date(0);
    expect(parse(new Date(0))).to.deep.equal({
      years: d.getFullYear(),
      months: d.getMonth(),
      dates: d.getDate(),
      hours: d.getHours(),
      minutes: d.getMinutes(),
      seconds: d.getSeconds(),
      milliseconds: d.getMilliseconds()
    })
  })

  it('should use the UTC date and time', () => {
    const d = new Date(0);
    const utcObj = {
      years: d.getUTCFullYear(),
      months: d.getUTCMonth(),
      dates: d.getUTCDate(),
      hours: d.getUTCHours(),
      minutes: d.getUTCMinutes(),
      seconds: d.getUTCSeconds(),
      milliseconds: d.getUTCMilliseconds()
    }
    expect(parse(0, true)).to.deep.equal(utcObj)
    expect(parse('Thu, 01 Jan 1970 00:00:00 GMT', true)).to.deep.equal(utcObj)
    expect(parse(new Date(0), true)).to.deep.equal(utcObj)
  })
})
