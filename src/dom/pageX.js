export default function pageX(el) {
  let parent = el;
  let x = 0;

  while (parent) {
    x += parent.offsetLeft;
    parent = parent.offsetParent;
  }

  return x;
}
