import isElement from '../../src/dom/isElement'

describe('isElement', () => {
  it('should return true', () => {
    const div = document.createElement('div')
    expect(isElement(div)).to.equal(true)
  })

  it('should return false', () => {
    const textNode = document.createTextNode('hello')
    expect(isElement()).to.equal(false)
    expect(isElement({})).to.equal(false)
    expect(isElement(textNode)).to.equal(false)
    expect(isElement(document)).to.equal(false)
  })
})
