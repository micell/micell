import { expect } from 'chai'
import isRgb from '../../src/regex/isRgb'

describe('regex/isRgb', () => {
  const rgbStrings = [
    'rgb(0,0,0)',
    'RGB(0,0,0)',
    'rgb(10, 10, 10)',
    'rgb( 0, 0,  0 )',
  ]
  const notRgbStrings = ['', 'rgb(0,0,0.1)', 'Rgb(0,0,0)', 'rgb (0,0,0)']

  it('should be a RGB string', () => {
    rgbStrings.forEach((str) => {
      expect(isRgb(str)).to.equal(true)
    })
  })

  it('should not be a RGB string', () => {
    notRgbStrings.forEach((str) => {
      expect(isRgb(str)).to.equal(false)
    })
  })
})
