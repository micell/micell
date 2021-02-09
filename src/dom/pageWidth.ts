import isElement from './isElement'

export default function pageWidth(el?: HTMLElement): number {
  if (!el) {
    return document.documentElement.scrollWidth
  }
  if (!isElement(el)) {
    throw new TypeError('the parameter el must be an valid html element')
  }
  return el.scrollWidth
}
