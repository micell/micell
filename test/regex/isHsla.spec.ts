import { expect } from 'chai'
import isHsla from '../../src/regex/isHsla'

describe('regex/isHsla', () => {
  const hslaStrings = [
    'hsla(0,0%,1%,0)',
    'hsla(0,0%,1%,1)',
    'hsla(0,0%,1%,0.1)',
    'hsla(0,0%,1%,.1)',
    'HSLA(0,0%,1%,0.1)',
    'hsla(0, 0%, 1%, 0.1)',
    'hsla(  0  , 0% ,  1% , 0.1  )',
  ]
  const notHslaStrings = [
    '',
    'hsla(0,0%,1%)',
    'Hsla(0,0%,1%,0,0.1)',
    'Hsla(0,0%,1%,0,-0.1)',
    'Hsla(0,0%,1%,0,0.1)',
    'hsla(0.1,0%,1%,0.1)',
    'hsla (0,0%,1%,0.1)',
  ]

  it('should be an HSLA string', () => {
    hslaStrings.forEach((str) => {
      expect(isHsla(str)).to.equal(true)
    })
  })

  it('should not be an HSLA string', () => {
    notHslaStrings.forEach((str) => {
      expect(isHsla(str)).to.equal(false)
    })
  })
})
