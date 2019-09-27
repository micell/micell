import delay from '../../src/delay'
import scrollX from '../../src/dom/scrollX'
import scrollY from '../../src/dom/scrollY'
import scrollTo from '../../src/dom/scrollTo'

describe('scrollTo', () => {
  let container = null

  before(() => {
    document.documentElement.innerHTML = window.__FIXTURES__['test/fixtures/dom/scrollTo.html']
    container = document.querySelector('.container')
  })

  beforeEach(async () => {
    window.scrollTo(0, 0)
    container.scrollLeft = 0
    container.scrollTop = 0
    await delay()
  })

  it('should scroll to (0, 0) if the 1st parameter is missing', async () => {
    window.scrollTo(100, 100)
    await delay()
    expect(scrollX()).to.equal(100)
    expect(scrollY()).to.equal(100)

    scrollTo()
    await delay()
    expect(scrollX()).to.equal(0)
    expect(scrollY()).to.equal(0)
  })

  it.skip('scrollTo(window, 100, 100)', async () => {
    scrollTo(window, 100, 100)
    await delay()
    expect(scrollX()).to.equal(100)
    expect(scrollY()).to.equal(100)
  })

  it('scrollTo(container, 100, 100)', async () => {
    scrollTo(container, 100, 100)
    await delay()
    expect(scrollX(container)).to.equal(100)
    expect(scrollY(container)).to.equal(100)
  })

  it.skip('scrollTo({ x: 100, y: 100 })', async () => {
    scrollTo({ x: 100, y: 100 })
    await delay()
    expect(scrollX()).to.equal(100)
    expect(scrollY()).to.equal(100)
  })

  it('scrollTo(container, { x: 100, y: 100 })', async () => {
    scrollTo(container, { x: 100, y: 100 })
    await delay()
    expect(scrollX(container)).to.equal(100)
    expect(scrollY(container)).to.equal(100)
  })

  it.skip('scrollTo({ left: 100, top: 100 })', async () => {
    scrollTo({ left: 100, top: 100 })
    await delay()
    expect(scrollX()).to.equal(100)
    expect(scrollY()).to.equal(100)
  })

  it('scrollTo(container, { left: 100, top: 100 })', async () => {
    scrollTo(container, { left: 100, top: 100 })
    await delay()
    expect(scrollX(container)).to.equal(100)
    expect(scrollY(container)).to.equal(100)
  })

  it.skip('scrollTo({ x: 0, y: 1000, easing: \'linear\' })', async () => {
    scrollTo({ x: 0, y: 1000, easing: 'linear' })
    expect(scrollX()).to.equal(0)
    expect(scrollY()).to.equal(0)

    await delay(50)
    expect(scrollX()).to.equal(0)
    expect(scrollY()).to.be.above(0)

    await delay(500)
    expect(scrollX()).to.equal(0)
    expect(scrollY()).to.equal(1000)
  })

  it.skip('scrollTo({ x: 0, y: 1000, easing: \'cubic-bezier(0,0,1,1)\' })', async () => {
    scrollTo({ x: 0, y: 1000, easing: 'cubic-bezier(0,0,1,1)' })
    expect(scrollX()).to.equal(0)
    expect(scrollY()).to.equal(0)

    await delay(50)
    expect(scrollX()).to.equal(0)
    expect(scrollY()).to.be.above(0)

    await delay(500)
    expect(scrollX()).to.equal(0)
    expect(scrollY()).to.equal(1000)
  })
})
