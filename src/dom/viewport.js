import isWindow from './isWindow'
import isElement from './isElement'

export default function viewport (elOrWindow) {
  let width = 0
  let height = 0

  if (isWindow(elOrWindow)) {
    width = elOrWindow.innerWidth || elOrWindow.document.documentElement.clientWidth
    height = elOrWindow.innerHeight || elOrWindow.document.documentElement.clientHeight
  } else if (isElement(elOrWindow)) {
    width = elOrWindow.clientWidth
    height = elOrWindow.clientHeight
  }

  return { width, height }
}
