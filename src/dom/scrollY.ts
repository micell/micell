import isWindow from './isWindow'
import isElement from './isElement'

export default function scrollY(elOrWindow: Element | Window = window): number {
  let y = 0
  if (isWindow(elOrWindow)) {
    const win = elOrWindow as Window
    y = win.scrollY || win.pageYOffset || win.document.documentElement.scrollTop
  } else if (isElement(elOrWindow)) {
    y = (elOrWindow as Element).scrollTop
  }
  return y
}
