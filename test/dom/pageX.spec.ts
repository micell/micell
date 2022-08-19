import { expect } from 'chai'
import pageX from '../../src/dom/pageX'

describe('pageX', () => {
  it('should return 0 if the argument is missing or not an element', () => {
    // @ts-ignore
    expect(pageX()).to.equal(0)
    // @ts-ignore
    expect(pageX({})).to.equal(0)
  })

  it('should return the expected pageX', (done) => {
    // @ts-ignore
    document.documentElement.innerHTML =
      window.__FIXTURES__['test/fixtures/dom/pageX.html']
    setTimeout(() => {
      const el1 = document.getElementById('el1')
      const el2 = document.getElementById('el2')
      const el3 = document.getElementById('el3')
      if (el1) {
        expect(pageX(el1)).to.equal(0)
      }
      if (el2) {
        expect(pageX(el2)).to.equal(100)
      }
      if (el3) {
        expect(pageX(el3)).to.equal(200)
      }
      done()
    }, 0)
  })
})
