export default function isElement(obj: any): boolean {
  return !!(obj && obj.nodeType === 1)
}
