import isWindow from './isWindow'
import isElement from './isElement'

export default function scrollY (elOrWindow = window) {
  let y = 0
  if (isWindow(elOrWindow)) {
    y = window.scrollY || window.pageYOffset || window.document.documentElement.scrollTop
  } else if (isElement(elOrWindow)) {
    y = elOrWindow.scrollTop
  }
  return y
}
