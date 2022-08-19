import { Query } from './types'

export default function parse(search = ''): Query {
  const queryString = search.charAt(0) === '?' ? search.slice(1) : search
  const reArrayName = /^[\w\W]+\[\]$/
  const query: Query = {}

  queryString.split('&').forEach((part) => {
    if (part) {
      const equalSignIndex = part.indexOf('=')
      const nameString =
        equalSignIndex > -1 ? part.slice(0, equalSignIndex) : part
      const valueString =
        equalSignIndex > -1 ? part.slice(equalSignIndex + 1) : ''
      let name = decodeURIComponent(nameString)
      const value = decodeURIComponent(valueString)

      if (reArrayName.test(name)) {
        name = name.slice(0, -2)
        if (!query[name]) {
          query[name] = [value]
          return
        }
      }

      if (query[name]) {
        if (!Array.isArray(query[name])) {
          query[name] = [query[name]] as Array<string>
        }
        ;(query[name] as Array<string>).push(value)
      } else {
        query[name] = value
      }
    }
  })

  return query
}
