import { describe, beforeEach, expect, it } from 'vitest'
import scrollX from '../../src/dom/scrollX'

describe('scrollX', () => {
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
      width: 10000px;
      height: 100px;
    }

    .container {
      width: 500px;
      overflow: auto;
    }

    .content {
      width: 5000px;
      height: 500px;
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

  it("should return the document's scrollX if the first parameter is missing or a window object", async () => {
    window.scrollTo(100, 0)
    await delay()
    expect(scrollX()).to.equal(100)
    expect(scrollX(window)).to.equal(100)
  })

  it("should return the element's scrollX if the first parameter is an element", async () => {
    const el = document.querySelector('.container')
    // TODO: do we need the conditional check to exclude `null` value?
    if (el) {
      el.scrollLeft = 100
      await delay()
      expect(scrollX(el)).to.equal(100)
    }
  })

  it('should return 0 if the first parameter is not an element or a window or undefined', () => {
    // @ts-ignore
    expect(scrollX(null)).to.equal(0)
    // @ts-ignore
    expect(scrollX({})).to.equal(0)
  })
})
