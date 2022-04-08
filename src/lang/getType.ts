export default function getType(o: any): string {
  return Object.prototype.toString.call(o).slice(8, -1)
}
