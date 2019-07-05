import convert from './util/convert'

export default function set (key, value, options, encoder = encodeURIComponent) {
  const attrsStr = convert(options || {})
  const valueStr = typeof encoder === 'function' ? encoder(value) : value
  const newCookie = `${key}=${valueStr}${attrsStr}`
  document.cookie = newCookie
}
