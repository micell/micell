import { expect } from 'chai'
import isRgba from '../../src/regex/isRgba'

describe('regex/isRgba', () => {
  const rgbaStrings = [
    'rgba(0,0,0,0)',
    'RGBA(0,0,0,0)',
    'rgba(0,0,0,0.1)',
    'rgba(0,0,0,.1)',
    'rgba(0,0,0,1)',
    'rgba(10, 10, 10, 0.1)',
    'rgba( 0, 0,  0 , 0.1 )',
  ]
  const notRgbaStrings = [
    '',
    'rgba(0,0,0.1,0.1)',
    'Rgba(0,0,0,0.1)',
    'rgba(0,0,0,-0.1)',
    'rgba (0,0,0,0.1)',
  ]

  it('should be a RGBA string', () => {
    rgbaStrings.forEach((str) => {
      expect(isRgba(str)).to.equal(true)
    })
  })

  it('should not be a RGBA string', () => {
    notRgbaStrings.forEach((str) => {
      expect(isRgba(str)).to.equal(false)
    })
  })
})
