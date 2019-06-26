/**
 * domready (c) Dustin Diaz 2014 - License MIT
*/

const fns = []
const doc = typeof document === 'object' && document
const hack = doc && doc.documentElement.doScroll
const domContentLoaded = 'DOMContentLoaded'
let loaded = doc && (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)
let listener

if (!loaded && doc) {
  listener = function () {
    let fn = fns.shift()
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (fn) {
      fn()
      fn = fns.shift()
    }
  }
  doc.addEventListener(domContentLoaded, listener)
}

export default function domReady (fn) {
  if (loaded) {
    setTimeout(fn, 0)
  } else {
    fns.push(fn)
  }
}
