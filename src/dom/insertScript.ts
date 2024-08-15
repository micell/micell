export interface InsertScriptOptions {
  [key: string]: any
}

export default function insertScript(
  url: string,
  options: InsertScriptOptions = {},
): HTMLScriptElement {
  const script: HTMLScriptElement = document.createElement('script')

  script.src = url

  for (const key of Object.keys(options)) {
    // @ts-ignore
    script[key] = options[key]
  }

  document.body.appendChild(script)
  return script
}
