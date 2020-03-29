import isElement from './isElement'

export default function pageX (el: HTMLElement): number {
  if (!isElement(el)) return 0

  let parent = el
  let x = 0

  while (parent) {
    x += parent.offsetLeft
    parent = parent.offsetParent as HTMLElement
  }

  return x
}
