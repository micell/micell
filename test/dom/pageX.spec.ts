import { describe, expect, it } from 'vitest'
import pageX from '../../src/dom/pageX'

describe('pageX', () => {
  it('should return 0 if the argument is missing or not an element', () => {
    // @ts-ignore
    expect(pageX()).to.equal(0)
    // @ts-ignore
    expect(pageX({})).to.equal(0)
  })

  it('should return the expected pageX', () => {
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
      background: #eee;
    }

    #el2 {
      height: 100px;
      margin-left: 100px;
      position: relative;
      background: #aaa;
    }

    #el3 {
      position: absolute;
      top: 0;
      left: 100px;
      width: 100px;
      height: 100px;
      background: #666;
    }
  </style>
</head>
<body>
  <div id="el1">
    <div id="el2">
      <div id="el3"></div>
    </div>
  </div>
</body>
</html>`

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
  })
})
