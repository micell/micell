import get from './get'
import getAll from './getAll'
import getJson from './getJson'
import getRaw from './getRaw'
import isEnabled from './isEnabled'
import remove from './remove'
import set from './set'
import setJson from './setJson'
import setRaw from './setRaw'

export type {
  Cookies,
  CookieOptions,
  CookieEncoder,
  CookieDecoder,
} from './types'

export default {
  isEnabled,
  get,
  getAll,
  getJson,
  getRaw,
  set,
  setJson,
  setRaw,
  remove,
}
