/**
 * A simple function can be used to generate a random string with the specified length.
 * And,the range of the characters is configurable.
 *
 * Default:
 *  len: 32
 *  chars: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'
 *
 * Note:
 *  The method charAt will convert its first parameter to an integer by floor.
 *  See the specification: http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.4.4
 *
 * Performance:
 *  http://jsperf.com/random-string-for-loop-vs-replace
 */
export default function randomString (len: number, chars: string): string {
  const actualLen = len || 32
  const actualChars = chars || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'

  let str = ''

  for (let i = 0; i < actualLen; i++) {
    str += actualChars.charAt(Math.random() * actualChars.length)
  }

  return str
}
