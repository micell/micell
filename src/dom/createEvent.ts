export interface Options {
  bubbles?: boolean;
  cancelable?: boolean;
  detail?: any;
}

export default function createEvent (type: string, options: Options = {}): CustomEvent<any> {
  const {
    bubbles = false,
    cancelable = false,
    detail = null
  } = options
  let event: CustomEvent<any>

  try {
    event = new CustomEvent(type, options)
  } catch (err) {
    // @ts-ignore
    event = document.createEvent(type)
    // @ts-ignore
    event.initCustomEvent(type, bubbles, cancelable, detail)
  }

  return event
}
