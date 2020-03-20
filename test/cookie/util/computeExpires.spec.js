import computeExpires from '../../../src/cookie/util/computeExpires'

// Treat as equal if the difference between two dates is less than 100ms
const diff = (d1, d2) => Math.abs(d1 - d2)

describe('cookie/util/computeExpires', () => {
  it('should return the date of the specified milliseconds', () => {
    const d = new Date(0)
    expect(diff(computeExpires(d.toISOString()), d)).to.equal(0)
  })

  it('should return the date after one year', () => {
    const d = new Date()
    d.setFullYear(d.getFullYear() + 1)
    expect(diff(computeExpires('1Y'), d)).to.be.below(100)
  })

  it('should return the date after one month', () => {
    const d = new Date()
    d.setMonth(d.getMonth() + 1)
    expect(diff(computeExpires('1M'), d)).to.be.below(100)
  })

  it('should return the date after one day', () => {
    const d = new Date()
    d.setDate(d.getDate() + 1)
    expect(diff(computeExpires('1D'), d)).to.be.below(100)
  })

  it('should return the date before one day', () => {
    const d = new Date()
    d.setDate(d.getDate() - 1)
    expect(diff(computeExpires('-1D'), d)).to.be.below(100)
  })

  it('should return the date after one hour', () => {
    const d = new Date()
    d.setHours(d.getHours() + 1)
    expect(diff(computeExpires('1h'), d)).to.be.below(100)
  })

  it('should return the date after one minute', () => {
    const d = new Date()
    d.setMinutes(d.getMinutes() + 1)
    expect(diff(computeExpires('1m'), d)).to.be.below(100)
  })

  it('should return the date after one second', () => {
    const d = new Date()
    d.setSeconds(d.getSeconds() + 1)
    expect(diff(computeExpires('1s'), d)).to.be.below(100)
  })
})
