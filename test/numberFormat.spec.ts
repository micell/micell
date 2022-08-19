import { expect } from 'chai'
import numberFormat from '../src/numberFormat'

describe('numberFormat', () => {
  it('should return an empty string if the 1st argument is missing or not a number', () => {
    // @ts-ignore
    expect(numberFormat()).to.equal('')
    // @ts-ignore
    expect(numberFormat('3.14')).to.equal('')
  })

  it('should format the number normally', () => {
    expect(numberFormat(0)).to.equal('0')
    expect(numberFormat(123456789.123, 3)).to.equal('123,456,789.123')
  })

  it('2nd argument: digits > -1', () => {
    expect(numberFormat(3.14, 0)).to.equal('3')
    expect(numberFormat(3.1415, 3)).to.equal('3.142')
  })

  it('3rd argument: dot', () => {
    expect(numberFormat(3.14, 2, '_')).to.equal('3_14')
  })

  it('4th argument: sep', () => {
    expect(numberFormat(0, 0, undefined, ' ')).to.equal('0')
    expect(numberFormat(1.1, 3, undefined, ' ')).to.equal('1.100')
    expect(numberFormat(1234567.456, 3, undefined, ' ')).to.equal(
      '1 234 567.456',
    )
    expect(numberFormat(12345678.456, 3, undefined, ' ')).to.equal(
      '12 345 678.456',
    )
    expect(numberFormat(123456789.456, 3, undefined, ' ')).to.equal(
      '123 456 789.456',
    )
    expect(numberFormat(-123456789.456, 3, undefined, ' ')).to.equal(
      '-123 456 789.456',
    )
  })
})
