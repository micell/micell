export default function pageY (el) {
  let parent = el
  let y = 0

  while (parent) {
    y += parent.offsetTop
    parent = parent.offsetParent
  }

  return y
}
