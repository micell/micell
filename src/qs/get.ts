import parse from './parse'

export default function get (name: string, search: string): string {
  const query = parse(search)
  return query[name]
}