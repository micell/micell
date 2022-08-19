import isElement from './isElement'

export default function pageY(el: HTMLElement): number {
  // TODO: to throw a type error?
  if (!isElement(el)) return 0

  let parent = el
  let y = 0

  while (parent) {
    y += parent.offsetTop
    parent = parent.offsetParent as HTMLElement
  }

  return y
}
