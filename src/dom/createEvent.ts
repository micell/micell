export interface CreateEventOptions {
  bubbles?: boolean;
  cancelable?: boolean;
  detail?: any;
}

export default function createEvent (type: string, options: CreateEventOptions = {}): CustomEvent<any> {
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
    event = document.createEvent('Event')
    // @ts-ignore
    if (typeof event.initCustomEvent === 'function') {
      event.initCustomEvent(type, bubbles, cancelable, detail)
    } else {
      event.initEvent(type, bubbles, cancelable)
      // @ts-ignore
      event.detail = detail
    }
  }

  return event
}
