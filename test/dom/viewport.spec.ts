import { describe, beforeEach, expect, it } from 'vitest'
import viewport from '../../src/dom/viewport'

describe('viewport', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title></title>
  <style>
    #el1 {
      width: 200px;
      height: 100px;
      overflow: auto;
    }

    p {
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div id="el1">
    <h1>Title</h1>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
  </div>
</body>
</html>`
  })

  it('should return `{ width: 0, height: 0 }` if no argument', () => {
    // @ts-ignore
    expect(viewport()).to.deep.equal({ width: 0, height: 0 })
  })

  it("should return the window's viewport if a window object is passed", () => {
    const width = window.innerWidth || document.documentElement.clientWidth
    const height = window.innerHeight || document.documentElement.clientHeight
    expect(viewport(window)).to.deep.equal({ width, height })
  })

  it("should return the element's viewport if an element object is passed", () => {
    const element = document.getElementById('el1')
    if (element) {
      const width = element.clientWidth
      const height = element.clientHeight
      expect(viewport(element)).to.deep.equal({ width, height })
    }
  })
})
