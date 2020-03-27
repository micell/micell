import isString from '../lang/isString'

const isCJK = (ch: any): boolean => {
  if (isString(ch) && ch.length === 1) {
    return /[\u1100-\u11ff\u2e80-\u2fdf\u3040-\u318f\u3200-\u4dbf\u4e00-\u9fff\ua960-\ua97f\uf900-\ufaff\u3000-\u303f\uac00-\ud7af\ufe10-\ufe1f\ufe30-\ufe6f\uff00-\uff60\uffe0-\uffef]/.test(ch)
  }
  return false
}

export default isCJK
