import isObject from '../lang/isObject'
import queryStringify from '../qs/stringify'
import { Query } from '../qs/types'

export interface URLParts {
  hash?: string;
  // TODO: host and hostname must be passed at least one
  host?: string;
  hostname?: string;
  password?: string;
  pathname?: string;
  port?: string;
  protocol: string;
  query?: Query;
  search?: string;
  username?: string;
}


export default function stringify (urlParts: URLParts): string {
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
  } else {
    /* istanbul ignore else */
    if (query) {
      const search = queryStringify(query)
      if (search) {
        url += `?${search}`
      }
    }
  }

  url += hash

  return url
}
