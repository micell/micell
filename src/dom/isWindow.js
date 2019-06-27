export default function isWindow (obj) {
  return !!(obj && obj.self === obj)
}
