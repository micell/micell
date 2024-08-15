export default function encodeFile(file: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      const str = reader.result ? (reader.result as string).replace(/data:.+?,/, '') : ''
      resolve(str)
    })
    reader.addEventListener('error', () => {
      reject(new Error('error occurred in reading file'))
    })
    reader.readAsDataURL(file)
  })
}
