export default function getAll (decoder = decodeURIComponent) {
  const reKey = /(?:^|; )([^=]+?)(?:=([^;]*))?(?:;|$)/g
  const cookies = {}
  let match

  while ((match = reKey.exec(document.cookie))) {
    reKey.lastIndex = (match.index + match.length) - 1
    cookies[match[1]] = typeof decoder === 'function' ? decoder(match[2]) : match[2]
  }

  return cookies
}
