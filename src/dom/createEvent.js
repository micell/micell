export default function createEvent (type, options = {}) {
  const {
    bubbles = false,
    cancelable = false,
    detail = null
  } = options
  let event = null

  try {
    event = new CustomEvent(type, options)
  } catch (err) {
    event = document.createEvent(type)
    event.initCustomEvent(type, bubbles, cancelable, detail)
  }

  return event
}
