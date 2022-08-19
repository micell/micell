export default function isWindow(obj: any): boolean {
  return !!(obj && obj.self === obj)
}
