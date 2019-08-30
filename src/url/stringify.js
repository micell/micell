import isObject from '../lang/isObject'
import queryStringify from '../qs/stringify'

export default function stringify (urlParts) {
  if (!isObject(urlParts)) {
    throw new TypeError('invalid url parts object')
  }
  const {
    protocol,
    username,
    password,
    host,
    hostname,
    port = '',
    pathname = '',
    search = '',
    query = {},
    hash = ''
  } = urlParts

  if (!protocol) {
    throw new TypeError('protocol missing')
  }
  if (!host && !hostname) {
    throw new TypeError('host or hostname missing')
  }

  let url = ''

  url += `${protocol}://`

  if (username) {
    url += username
    if (password) {
      url += `:${password}`
    }
    url += '@'
  }

  if (host) {
    url += host
  } else {
    url += hostname
    if (port) {
      url += `:${port}`
    }
  }

  url += pathname

  if (search) {
    url += search
  } else if (query) {
    const search = queryStringify(query)
    if (search) {
      url += `?${search}`
    }
  }

  url += hash

  return url
}
