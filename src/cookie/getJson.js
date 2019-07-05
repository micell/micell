import get from './get'

export default function getJson (key) {
  return get(key, JSON.parse)
}
