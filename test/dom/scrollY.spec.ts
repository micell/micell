import { describe, beforeEach, expect, it } from 'vitest'
import scrollY from '../../src/dom/scrollY'

describe('scrollY', () => {
  const delay = (duration = 0) =>
    new Promise((resolve) => setTimeout(resolve, duration))

  beforeEach(() => {
    document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
  <title></title>
  <style>
    body {
      height: 10000px;
    }

    .container {
      height: 500px;
      overflow: auto;
    }

    .content {
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
  })

  it("should return the document's scrollY if the first parameter is missing or a window object", async () => {
    window.scrollTo(0, 100)
    await delay()
    expect(scrollY()).to.equal(100)
    expect(scrollY(window)).to.equal(100)
  })

  it("should return the element's scrollY if the first parameter is an element", async () => {
    const el = document.querySelector('.container')
    if (el) {
      el.scrollTop = 100
      await delay()
      expect(scrollY(el)).to.equal(100)
    }
  })

  it('should return 0 if the first parameter is not an element or a window or undefined', () => {
    // @ts-ignore
    expect(scrollY(null)).to.equal(0)
    // @ts-ignore
    expect(scrollY({})).to.equal(0)
  })
})
