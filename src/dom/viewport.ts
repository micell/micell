import isElement from './isElement'
import isWindow from './isWindow'

export interface Viewport {
  width: number
  height: number
}

// TODO: default value is window
export default function viewport(elOrWindow: Element | Window): Viewport {
  let width = 0
  let height = 0

  if (isWindow(elOrWindow)) {
    const win = elOrWindow as Window
    width = win.innerWidth || /* istanbul ignore next */ win.document.documentElement.clientWidth
    height = win.innerHeight || /* istanbul ignore next */ win.document.documentElement.clientHeight
  } else if (isElement(elOrWindow)) {
    const el = elOrWindow as Element
    width = el.clientWidth
    height = el.clientHeight
  }

  return { width, height }
}
