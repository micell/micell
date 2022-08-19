export default function bytesToHex(bytes: Array<number>): string {
  let hex = ''
  for (let i = 0; i < bytes.length; i++) {
    hex += ('0' + (bytes[i] & 0xff).toString(16)).slice(-2)
  }
  return hex
}
