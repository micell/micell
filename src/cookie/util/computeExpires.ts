// Return a future date by the given string
export default function computeExpires(str: string): Date {
  const lastCh = str.charAt(str.length - 1)
  const value = Number.parseInt(str, 10)
  let expires = new Date()

  switch (lastCh) {
    case 'Y':
      expires.setFullYear(expires.getFullYear() + value)
      break
    case 'M':
      expires.setMonth(expires.getMonth() + value)
      break
    case 'D':
      expires.setDate(expires.getDate() + value)
      break
    case 'h':
      expires.setHours(expires.getHours() + value)
      break
    case 'm':
      expires.setMinutes(expires.getMinutes() + value)
      break
    case 's':
      expires.setSeconds(expires.getSeconds() + value)
      break
    default:
      expires = new Date(str)
  }

  return expires
}
