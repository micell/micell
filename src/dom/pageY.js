import isElement from './isElement'

export default function pageY (el) {
  if (!isElement(el)) return 0

  let parent = el
  let y = 0

  while (parent) {
    y += parent.offsetTop
    parent = parent.offsetParent
  }

  return y
}
