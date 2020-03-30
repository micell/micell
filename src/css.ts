import isString from './lang/isString'
import isObject from './lang/isObject'
import isElement from './dom/isElement'

interface CSSProps {
  [key: string]: number | string;
}

export default function css (el: string | Element, prop?: string | CSSProps): any {
  let elem: Element | null

  if (isString(el)) {
    elem = document.querySelector(el as string)
    if (!elem) {
      throw new Error('the element is not exist')
    }
  } else if (isElement(el)) {
    elem = el as Element
  } else {
    throw new Error('the 1st argument must be a css selector or an element')
  }

  if (isObject(prop)) {
    let cssText = (elem as HTMLElement).style.cssText
    Object.keys(prop as CSSProps).forEach((name) => {
      cssText += `${name}: ${(prop as CSSProps)[name]};`
    });
    (elem as HTMLElement).style.cssText = cssText
  } else {
    let ret = window.getComputedStyle(elem)
    if (isString(prop)) {
      // @ts-ignore
      ret = ret[prop as string]
    }
    return ret
  }
}
