import scrollX from '../../src/dom/scrollX'

describe('scrollX', () => {
  before(() => {
    document.documentElement.innerHTML = window.__FIXTURES__['test/fixtures/dom/scrollX.html']
  })

  it('should return the document\'s scrollX if the first parameter is missing or a window object', (done) => {
    window.scrollTo(100, 0)
    setTimeout(() => {
      expect(scrollX()).to.equal(100)
      expect(scrollX(window)).to.equal(100)
      done()
    })
  })

  it('should return the element\'s scrollX if the first parameter is an element', (done) => {
    const el = document.querySelector('.container')
    el.scrollLeft = 100
    setTimeout(() => {
      expect(scrollX(el)).to.equal(100)
      done()
    })
  })

  it('should return 0 if the first parameter is not an element or a window or undefined', () => {
    expect(scrollX(null)).to.equal(0)
    expect(scrollX({})).to.equal(0)
  })
})
