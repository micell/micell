import domReady from '../../src/dom/domReady'

describe('domReady', () => {
  it('should execute the argument function after DOM ready', (done) => {
    const fn = () => {
      expect(1).to.equal(1)
      done()
    }
    domReady(fn)
  })
})
