import type { CookieDecoder, Cookies } from './types'

export default function getAll(decoder: CookieDecoder = decodeURIComponent): Cookies {
  const reKey = /(?:^|; )([^=]+?)(?:=([^;]*))?(?:;|$)/g
  const cookies: Cookies = {}
  let match: RegExpExecArray | null

  while ((match = reKey.exec(document.cookie))) {
    reKey.lastIndex = match.index + match.length - 1
    cookies[match[1]] =
      typeof decoder === 'function' ? decoder(match[2]) : /* istanbul ignore next */ match[2]
  }

  return cookies
}
