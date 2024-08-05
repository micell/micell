import { describe, beforeEach, expect, it } from 'vitest'
import isInViewport from '../../src/dom/isInViewport'

describe('isInViewport', () => {
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
    div {
      width: 100px;
      height: 100px;
      background: #aaa;
    }

    #el2 {
      position: fixed;
      top: -50px;
      left: 0;
    }

    #el3 {
      position: fixed;
      top: 0;
      right: -50px;
    }

    #el4 {
      position: fixed;
      left: 0;
      bottom: -50px;
    }

    #el5 {
      position: fixed;
      top: 0;
      left: -50px;
    }

    #el6 {
      position: fixed;
      top: -100px;
      left: 0;
    }

    #el7 {
      position: fixed;
      top: 0;
      right: -100px;
    }

    #el8 {
      position: fixed;
      left: 0;
      bottom: -100px;
    }

    #el9 {
      position: fixed;
      top: 0;
      left: -100px;
    }
  </style>
</head>
<body>
  <div id="el1"></div>
  <div id="el2"></div>
  <div id="el3"></div>
  <div id="el4"></div>
  <div id="el5"></div>
  <div id="el6"></div>
  <div id="el7"></div>
  <div id="el8"></div>
  <div id="el9"></div>
</body>
</html>`
  })

  it('should return false if the argument is missing or not an element', () => {
    // @ts-ignore
    expect(isInViewport()).to.equal(false)
    // @ts-ignore
    expect(isInViewport({})).to.equal(false)
  })

  it('should return true if the element is in viewport', () => {
    const el = document.getElementById('el1')
    el && expect(isInViewport(el)).to.equal(true)
  })

  it('should return false if the element is split by the viewport edge', () => {
    const el2 = document.getElementById('el2')
    const el3 = document.getElementById('el3')
    const el4 = document.getElementById('el4')
    const el5 = document.getElementById('el5')
    el2 && expect(isInViewport(el2)).to.equal(false)
    el3 && expect(isInViewport(el3)).to.equal(false)
    el4 && expect(isInViewport(el4)).to.equal(false)
    el5 && expect(isInViewport(el5)).to.equal(false)
  })

  it('should return false if the element is located in the outsite of viewport', () => {
    const el6 = document.getElementById('el6')
    const el7 = document.getElementById('el7')
    const el8 = document.getElementById('el8')
    const el9 = document.getElementById('el9')
    el6 && expect(isInViewport(el6)).to.equal(false)
    el7 && expect(isInViewport(el7)).to.equal(false)
    el8 && expect(isInViewport(el8)).to.equal(false)
    el9 && expect(isInViewport(el9)).to.equal(false)
  })
})
