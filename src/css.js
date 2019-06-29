import isString from './lang/isString'
import isObject from './lang/isObject'
import isElement from './dom/isElement'

export default function css (el, prop) {
  let elem = null

  if (isString(el)) {
    elem = document.querySelector(el)
    if (!elem) {
      throw new Error('the element is not exist')
    }
  } else if (isElement(el)) {
    elem = el
  } else {
    throw new Error('the 1st argument must be a css selector or an element')
  }

  if (isObject(prop)) {
    let cssText = el.style.cssText
    Object.keys(prop).forEach((name) => {
      cssText += `${name}: ${prop[name]};`
    })
    el.style.cssText = cssText
  } else {
    let ret = window.getComputedStyle(elem)
    if (isString(prop)) {
      ret = ret[prop]
    }
    return ret
  }
}
