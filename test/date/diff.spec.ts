import { expect } from 'chai'
import diff from '../../src/date/diff'

describe('date/diff', () => {
  it('should support a date object', () => {
    const d1 = new Date(2019, 0, 1, 0, 0, 0)
    const d2 = new Date(2019, 0, 1, 0, 0, 10)
    expect(diff(d1, d2)).to.equal(10 * 1000)
  })

  it('should support a parsable date string', () => {
    const d1 = '2019-01-01T00:00:00'
    const d2 = '2019-01-01T00:00:10'
    expect(diff(d1, d2)).to.equal(10 * 1000)
  })

  it('should support a timestamp number', () => {
    const d1 = 0
    const d2 = 10000
    expect(diff(d1, d2)).to.equal(10000)
  })

  it('should return a negative number', () => {
    const d1 = 10000
    const d2 = 0
    expect(diff(d1, d2)).to.equal(-10000)
  })

  it('should return the appropriate value for the specified unit', () => {
    type DiffParams = [Date, Date, string]
    type TestUnit = [DiffParams, number]
    const testUnits: Array<TestUnit> = [
      [
        [
          new Date(2019, 0, 1, 0, 0, 0, 0),
          new Date(2019, 0, 1, 0, 0, 0, 10),
          'ms',
        ],
        10,
      ],
      [
        [
          new Date(2019, 0, 1, 0, 0, 0, 0),
          new Date(2019, 0, 1, 0, 0, 10, 0),
          's',
        ],
        10,
      ],
      [
        [
          new Date(2019, 0, 1, 0, 0, 0, 0),
          new Date(2019, 0, 1, 0, 10, 0, 0),
          'm',
        ],
        10,
      ],
      [
        [
          new Date(2019, 0, 1, 0, 0, 0, 0),
          new Date(2019, 0, 1, 10, 0, 0, 0),
          'h',
        ],
        10,
      ],
      [
        [
          new Date(2019, 0, 1, 0, 0, 0, 0),
          new Date(2019, 0, 11, 0, 0, 0, 0),
          'D',
        ],
        10,
      ],
      [
        [
          new Date(2019, 0, 1, 0, 0, 0, 0),
          new Date(2019, 10, 1, 0, 0, 0, 0),
          'M',
        ],
        10,
      ],
      [
        [
          new Date(2019, 0, 1, 0, 0, 0, 0),
          new Date(2029, 0, 1, 0, 0, 0, 0),
          'Y',
        ],
        10,
      ],
    ]

    testUnits.forEach((testUnit) => {
      expect(diff(...testUnit[0])).to.equal(testUnit[1])
    })
  })

  it('should use the specified round function', () => {
    const d1 = new Date(2019, 0, 1, 0, 0, 0, 0)
    const d2 = new Date(2019, 0, 1, 0, 0, 0, 500)
    expect(diff(d1, d2, 's')).to.equal(1)
    expect(diff(d1, d2, 's', Math.floor)).to.equal(0)
    expect(diff(d1, d2, 's', Math.ceil)).to.equal(1)
  })
})
