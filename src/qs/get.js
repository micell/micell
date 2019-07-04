import parse from './parse'

export default function get (name, search) {
  const query = parse(search)
  return query[name]
}
