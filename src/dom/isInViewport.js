import isElement from './isElement'
import viewport from './viewport'

export default function isInViewport (el) {
  if (!isElement(el)) return false

  const { top, left, right, bottom } = el.getBoundingClientRect()
  const { width, height } = viewport(window)

  return !(top < 0 || bottom > height || left < 0 || right > width)
}
