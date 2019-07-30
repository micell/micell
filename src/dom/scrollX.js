import isWindow from './isWindow'
import isElement from './isElement'

export default function scrollX (elOrWindow = window) {
  let x = 0
  if (isWindow(elOrWindow)) {
    x = window.scrollX || window.pageXOffset || window.document.documentElement.scrollLeft
  } else if (isElement(elOrWindow)) {
    x = elOrWindow.scrollLeft
  }
  return x
}
