import set from './set'

export default function setJson (key, value, options) {
  set(key, value, options, JSON.stringify)
}
