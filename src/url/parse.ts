import isString from '../lang/isString'
import queryParse from '../qs/parse'
import { Query } from '../qs/types'

const reUrl = /(\w+):\/\/(?:(\w+)(?::(\w+))?@)?([^@/#]+\.[a-z]+)(?::(\d+))?([^?#]+)?(\?[^#]+)?(#[\w\W]+)?/

export interface URLObject {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  origin: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  query: Query;
  search: string;
  username: string;
}

export default function parse (url: string): URLObject {
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
  // TODO: should convert port to a number?
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
