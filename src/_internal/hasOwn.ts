export default function hasOwn(obj: any, prop: string | number | symbol): boolean {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}
