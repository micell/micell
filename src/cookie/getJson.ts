import get from './get'

export default function getJson (key: string): any {
  return get(key, JSON.parse)
}
