import { describe, beforeEach, expect, it } from 'vitest'
import pageWidth from '../../src/dom/pageWidth'

describe('pageWidth', () => {
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
    body {
      margin: 0;
      padding: 0;
    }
    #el1 {
      width: 4000px;
      height: 4000px;
      overflow: hidden;
    }
    #el2 {
      width: 5000px;
      height: 5000px;
    }
  </style>
</head>
<body>
  <div id="el1">
    <div id="el2"></div>
  </div>
</body>
</html>`
  })

  it('should return the width of document if the argument is missing', () => {
    expect(pageWidth()).to.equal(4000)
  })

  it('should throw a type error if the argument is not the specified type', () => {
    // @ts-ignore
    const fn = () => pageWidth({})
    expect(fn).to.throw(TypeError)
  })

  it('should return the expected pageWidth', () => {
    const el2 = document.getElementById('el2')
    if (el2) {
      expect(pageWidth(el2)).to.equal(5000)
    }
  })
})
