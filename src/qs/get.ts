import parse from './parse'

export default function get (name: string, search: string): string | Array<string> {
  const query = parse(search)
  return query[name]
}
