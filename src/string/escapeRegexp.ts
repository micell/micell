/**
 * Escape regexp special characters. The slash `/` will be escaped automatically.
 * http://stackoverflow.com/questions/494035/how-do-you-pass-a-variable-to-a-regular-expression-javascript/494122#494122
 */
export default function escapeRegexp(str: string): string {
  return str.replace(/[.*+?^$|[\](){}\\-]/g, '\\$&')
}
