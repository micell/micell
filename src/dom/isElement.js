export default function isElement (obj) {
  return !!(obj && obj.nodeType === 1)
}
