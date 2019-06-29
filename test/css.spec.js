import css from '../src/css'

describe('css', () => {
  before((done) => {
    document.documentElement.innerHTML = window.__FIXTURES__['test/fixtures/css.html']
    setTimeout(() => done(), 0)
  })

  it('should throw an error if the selector matched element is not exist', () => {
    const fn = () => css('not_exist_in_document')
    expect(fn).to.throw()
  })

  it('should throw an error if the 1st argument is not a string or an element', () => {
    expect(() => css()).to.throw()
    expect(() => css(1)).to.throw()
  })

  it('should return a CSSStyleDeclaration object if the 2nd argument is missing', () => {
    const el = document.getElementById('el1')
    expect(css(el)).to.be.instanceof(CSSStyleDeclaration)
    expect(css('#el1')).to.be.instanceof(CSSStyleDeclaration)
  })

  it('should return the specified property\'s value if the 2nd argument is a string', () => {
    expect(css('#el1', 'width')).to.equal('100px')
    expect(css('#el1', 'height')).to.equal('100px')
    expect(css('#el1', 'padding')).to.equal('10px')
    expect(css('#el1', 'paddingTop')).to.equal('10px')
    expect(css('#el1', 'border-left-width')).to.equal('1px')
  })

  it('should set the css property if the 2nd argument is an object', () => {
    const el = document.getElementById('el1')
    css(el, {
      width: '50px',
      'border-width': '2px'
    })
    const style = window.getComputedStyle(el)
    expect(style['width']).to.equal('50px')
    expect(style['border-width']).to.equal('2px')
  })
})
