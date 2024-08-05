import { describe, beforeEach, expect, it } from 'vitest'
import delay from '../../src/delay'
import scrollX from '../../src/dom/scrollX'
import scrollY from '../../src/dom/scrollY'
import scrollTo from '../../src/dom/scrollTo'

describe('scrollTo', () => {
  let container: Element | null

  beforeEach(() => {
    document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>scrollTo</title>
  <style>
    body {
      width: 10000px;
      height: 10000px;
    }

    .container {
      width: 500px;
      height: 500px;
      overflow: auto;
    }

    .content {
      width: 5000px;
      height: 5000px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="content"></div>
  </div>
</body>
</html>`
    container = document.querySelector('.container')
  })

  beforeEach(async () => {
    window.scrollTo(0, 0)
    if (container) {
      container.scrollLeft = 0
      container.scrollTop = 0
    }
    await delay()
  })

  it('should scroll to (0, 0) if the 1st parameter is missing', async () => {
    window.scrollTo(100, 100)
    await delay()
    expect(scrollX()).to.equal(100)
    expect(scrollY()).to.equal(100)

    // @ts-ignore
    scrollTo()
    await delay()
    expect(scrollX()).to.equal(0)
    expect(scrollY()).to.equal(0)
  })

  it('scrollTo(window, 100, 100)', async () => {
    scrollTo(window, 100, 100)
    await delay()
    expect(scrollX()).to.equal(100)
    expect(scrollY()).to.equal(100)
  })

  it('scrollTo(container, 100, 100)', async () => {
    if (container) {
      scrollTo(container, 100, 100)
      await delay()
      expect(scrollX(container)).to.equal(100)
      expect(scrollY(container)).to.equal(100)
    }
  })

  it('scrollTo({ x: 100, y: 100 })', async () => {
    scrollTo({ x: 100, y: 100 })
    await delay()
    expect(scrollX()).to.equal(100)
    expect(scrollY()).to.equal(100)
  })

  it('scrollTo(container, { x: 100, y: 100 })', async () => {
    if (container) {
      scrollTo(container, { x: 100, y: 100 })
      await delay()
      expect(scrollX(container)).to.equal(100)
      expect(scrollY(container)).to.equal(100)
    }
  })

  it('scrollTo({ left: 100, top: 100 })', async () => {
    scrollTo({ left: 100, top: 100 })
    await delay()
    expect(scrollX()).to.equal(100)
    expect(scrollY()).to.equal(100)
  })

  it('scrollTo(container, { left: 100, top: 100 })', async () => {
    if (container) {
      scrollTo(container, { left: 100, top: 100 })
      await delay()
      expect(scrollX(container)).to.equal(100)
      expect(scrollY(container)).to.equal(100)
    }
  })

  it('scrollTo(container, { left: 100, top: 100 }) if container.scrollTo is not a function', async () => {
    if (container) {
      const originScrollTo = container.scrollTo
      // @ts-ignore
      container.scrollTo = null
      scrollTo(container, { left: 100, top: 100 })
      await delay()
      expect(scrollX(container)).to.equal(100)
      expect(scrollY(container)).to.equal(100)
      container.scrollTo = originScrollTo
    }
  })

  it("scrollTo({ x: 0, y: 1000, easing: 'linear' })", async () => {
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

  it("scrollTo({ x: 0, y: 1000, easing: 'cubic-bezier(0,0,1,1)' })", async () => {
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

  it("scrollTo({ left: 0, top: 1000, easing: 'invalid-easing' })", async () => {
    scrollTo({ x: 0, y: 1000, easing: 'invalid-easing' })
    expect(scrollX()).to.equal(0)
    expect(scrollY()).to.equal(1000)
  })
})
