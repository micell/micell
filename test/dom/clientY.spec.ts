import { describe, expect, it } from 'vitest'
import clientY from '../../src/dom/clientY'

describe('clientY', () => {
  it('should return 0 if the argument is missing or not an element', () => {
    // @ts-ignore
    expect(clientY()).to.equal(0)
    // @ts-ignore
    expect(clientY({})).to.equal(0)
  })

  it('should return the expected clientY', () => {
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
      height: 10000px;
    }

    #el1 {
      margin-top: 200px;
      width: 100px;
      height: 100px;
    }
  </style>
</head>
<body>
  <div id="el1"></div>
</body>
</html>`
    const el1 = document.getElementById('el1')
    if (el1) {
      expect(clientY(el1)).to.equal(200)
      window.scrollTo(0, 100)
      expect(clientY(el1)).to.equal(100)
    }
  })
})
