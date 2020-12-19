/**
 * domready (c) Dustin Diaz 2014 - License MIT
*/

export type AnyFunction = (...args: any[]) => any

const fns: Array<AnyFunction> = []
const doc = typeof document === 'object' && document
// @ts-ignore
const hack = doc && doc.documentElement.doScroll
const domContentLoaded = 'DOMContentLoaded'
let loaded = doc && (hack ? /* istanbul ignore next */ /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)
let listener: AnyFunction

/* istanbul ignore else */
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

export default function domReady (fn: AnyFunction): void {
  if (loaded) {
    setTimeout(fn, 0)
  } else {
    fns.push(fn)
  }
}
