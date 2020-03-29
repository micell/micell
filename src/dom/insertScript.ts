export interface Options {
  [key: string]: any;
}

export default function insertScript (url: string, options: Options = {}): HTMLScriptElement {
  const script = document.createElement('script')

  script.src = url

  Object.keys(options).forEach((key) => {
    script[key] = options[key]
  })

  document.body.appendChild(script)
  return script
}
