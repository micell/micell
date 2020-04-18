import isEnabled from './isEnabled'
import get from './get'
import getAll from './getAll'
import getJson from './getJson'
import getRaw from './getRaw'
import set from './set'
import setJson from './setJson'
import setRaw from './setRaw'
import remove from './remove'

export type { Cookies, CookieOptions, CookieEncoder, CookieDecoder } from './types'

export default {
  isEnabled,
  get,
  getAll,
  getJson,
  getRaw,
  set,
  setJson,
  setRaw,
  remove
}
