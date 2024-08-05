import { describe, expect, it } from 'vitest'
import pageY from '../../src/dom/pageY'

describe('pageY', () => {
  it('should return 0 if the argument is missing or not an element', () => {
    // @ts-ignore
    expect(pageY()).to.equal(0)
    // @ts-ignore
    expect(pageY({})).to.equal(0)
  })

  it('should return the expected pageY', () => {
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
      height: 500px;
      background: #eee;
      overflow: hidden;
    }

    #el2 {
      margin-top: 100px;
      position: relative;
      height: 200px;
      background: #aaa;
    }

    #el3 {
      position: absolute;
      top: 100px;
      left: 0;
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
      expect(pageY(el1)).to.equal(0)
    }
    if (el2) {
      expect(pageY(el2)).to.equal(100)
    }
    if (el3) {
      expect(pageY(el3)).to.equal(200)
    }
  })
})
