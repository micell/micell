import isElement from './isElement'
import pageY from './pageY'
import scrollY from './scrollY'

export default function clientY (el) {
  let y = 0
  if (isElement(el)) {
    y = pageY(el) - scrollY()
  }
  return y
}
