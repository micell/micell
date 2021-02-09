import isElement from './isElement'

export default function pageHeight(el?: HTMLElement): number {
  if (!el) {
    return document.documentElement.scrollHeight
  }
  if (!isElement(el)) {
    throw new TypeError('the parameter el must be an valid html element')
  }
  return el.scrollHeight
}
