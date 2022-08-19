export interface InsertScriptOptions {
  [key: string]: any
}

export default function insertScript(
  url: string,
  options: InsertScriptOptions = {},
): HTMLScriptElement {
  const script: HTMLScriptElement = document.createElement('script')

  script.src = url

  Object.keys(options).forEach((key) => {
    // @ts-ignore
    script[key] = options[key]
  })

  document.body.appendChild(script)
  return script
}
