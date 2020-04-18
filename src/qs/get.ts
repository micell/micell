import parse from './parse'

export default function get (name: string, search: string): string | number | boolean | Array<string | number | boolean> {
  const query = parse(search)
  return query[name]
}
