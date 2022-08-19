import decode from './decode'

export interface Base64DecodeFileOptions {
  type: string
}

export default function decodeFile(
  input: string,
  options: Base64DecodeFileOptions,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    try {
      const { type } = options
      const bytes = decode(input, { encoding: 'binary' })
      resolve(new Blob([Uint8Array.from(bytes as number[])], { type }))
    } catch (err) {
      reject(err)
    }
  })
}
