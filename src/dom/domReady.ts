/**
 * domready (c) Dustin Diaz 2014 - License MIT
*/

export type AnyFunc = (...args: any[]) => any

const fns: Array<AnyFunc> = []
const doc = typeof document === 'object' && document
// @ts-ignore
const hack = doc && doc.documentElement.doScroll
const domContentLoaded = 'DOMContentLoaded'
let loaded = doc && (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)
let listener

if (!loaded && doc) {
  listener = function (): void {
    let fn = fns.shift()
    doc.removeEventListener(domContentLoaded, listener)
    loaded = true
    while (fn) {
      fn()
      fn = fns.shift()
    }
  }
  doc.addEventListener(domContentLoaded, listener)
}

export default function domReady (fn: AnyFunc): void {
  if (loaded) {
    setTimeout(fn, 0)
  } else {
    fns.push(fn)
  }
}
