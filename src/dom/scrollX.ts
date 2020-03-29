import isWindow from './isWindow'
import isElement from './isElement'

export default function scrollX (elOrWindow: Element | Window = window): number {
  let x = 0
  if (isWindow(elOrWindow)) {
    const win = elOrWindow as Window
    x = win.scrollX || win.pageXOffset || win.document.documentElement.scrollLeft
  } else if (isElement(elOrWindow)) {
    x = (elOrWindow as Element).scrollLeft
  }
  return x
}
