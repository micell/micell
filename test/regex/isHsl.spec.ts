import { expect } from 'chai'
import isHsl from '../../src/regex/isHsl'

describe('regex/isHsl', () => {
  const hslStrings = [
    'hsl(0,0%,1%)',
    'HSL(0,0%,1%)',
    'hsl(0, 0%, 1%)',
    'hsl(  0  , 0% ,  1%  )'
  ]
  const notHslStrings = [
    '',
    'Hsl(0,0%,1%)',
    'hsl(0.1,0%,1%)',
    'hsl (0,0%,1%)'
  ]

  it('should be an HSL string', () => {
    hslStrings.forEach((str) => {
      expect(isHsl(str)).to.equal(true)
    })
  })

  it('should not be an HSL string', () => {
    notHslStrings.forEach((str) => {
      expect(isHsl(str)).to.equal(false)
    })
  })
})
