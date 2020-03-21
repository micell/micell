import isHexColor from '../../src/regex/isHexColor'

describe('regex/isHexColor', () => {
  const hexColorStrings = [
    '#fff',
    '#ffaa00'
  ]
  const notHexColorStrings = [
    '',
    '#',
    'fff',
    'ffaa00',
    '#f',
    '#ff',
    '#ffff',
    '#fffff',
    '#ffg'
  ]

  it('should be an hexadicimal color string', () => {
    hexColorStrings.forEach((str) => {
      expect(isHexColor(str)).to.equal(true)
    })
  })

  it('should not be an hexadicimal color string', () => {
    notHexColorStrings.forEach((str) => {
      expect(isHexColor(str)).to.equal(false)
    })
  })
})
