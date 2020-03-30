import { expect } from 'chai'
import pageY from '../../src/dom/pageY'

describe('pageY', () => {
  it('should return 0 if the argument is missing or not an element', () => {
    // @ts-ignore
    expect(pageY()).to.equal(0)
    // @ts-ignore
    expect(pageY({})).to.equal(0)
  })

  it('should return the expected pageY', (done) => {
    // @ts-ignore
    document.documentElement.innerHTML = window.__FIXTURES__['test/fixtures/dom/pageY.html']
    setTimeout(() => {
      const el1 = document.getElementById('el1')
      const el2 = document.getElementById('el2')
      const el3 = document.getElementById('el3')
      if (el1) {
        expect(pageY(el1)).to.equal(0)
      }
      if (el2) {
        expect(pageY(el2)).to.equal(100)
      }
      if (el3) {
        expect(pageY(el3)).to.equal(200)
      }
      done()
    }, 0)
  })
})
