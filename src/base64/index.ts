import decode from './decode'
import decodeFile from './decodeFile'
import encode from './encode'
import encodeFile from './encodeFile'

export type { Base64DecodeOptions } from './decode'
export type { Base64DecodeFileOptions } from './decodeFile'

export default {
  decode,
  decodeFile,
  encode,
  encodeFile,
}
