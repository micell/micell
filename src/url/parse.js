import isString from '../lang/isString'
import queryParse from '../qs/parse'

const reUrl = /(\w+):\/\/(?:(\w+)(?::(\w+))?@)?([^@/#]+\.[a-z]+)(?::(\d+))?([^?#]+)?(\?[^#]+)?(#[\w\W]+)?/

export default function parse (url) {
  if (!isString(url)) {
    throw new TypeError('invalid url')
  }
  const matched = url.match(reUrl)

  if (!matched) {
    throw new TypeError('invalid url')
  }

  const protocol = matched[1] || ''
  const username = matched[2] || ''
  const password = matched[3] || ''
  const hostname = matched[4] || ''
  const port = matched[5] || ''
  const pathname = matched[6] || ''
  const search = matched[7] || ''
  const hash = matched[8] || ''
  const host = `${hostname}${port ? `:${port}` : ''}`
  const origin = `${protocol}://${host}`
  const query = queryParse(search)

  return {
    hash,
    host,
    hostname,
    href: url,
    origin,
    password,
    pathname,
    port,
    protocol,
    query,
    search,
    username
  }
}
