import isString from '../lang/isString'

export default function isAbsolute (url) {
  return isString(url) && /^https?:\/\//.test(url)
}
