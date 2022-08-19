import { expect } from 'chai'
import clientY from '../../src/dom/clientY'

describe('clientY', () => {
  it('should return 0 if the argument is missing or not an element', () => {
    // @ts-ignore
    expect(clientY()).to.equal(0)
    // @ts-ignore
    expect(clientY({})).to.equal(0)
  })

  it('should return the expected clientY', (done) => {
    // @ts-ignore
    document.documentElement.innerHTML =
      window.__FIXTURES__['test/fixtures/dom/clientY.html']
    setTimeout(() => {
      const el1 = document.getElementById('el1')
      if (el1) {
        expect(clientY(el1)).to.equal(200)
        window.scrollTo(0, 100)
        expect(clientY(el1)).to.equal(100)
      }
      done()
    }, 0)
  })
})
