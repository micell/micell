import flattenEvents from './util/flattenEvents'

const EVENTS_KEY = '@events'
const slice = [].slice
let proto

// Constructor to initialize an `Emitter` instance.
function Emitter (obj) {
  this[EVENTS_KEY] = {}
}

proto = Emitter.prototype

// Add a listener for a given event.
proto.on = function on (type, fn) {
  (this[EVENTS_KEY][type] = this[EVENTS_KEY][type] || []).push(fn)
}

// Add a listener for a given event.
// This listener can be called once, then will be removed.
proto.once = function once (type, fn) {
  fn.$once = true
  this.on(type, fn)
}

// Remove all event listeners
// or remove the given event listeners
// or remove the specified listener for the given event.
proto.off = function off (type, fn) {
  const events = this[EVENTS_KEY][type]

  if (arguments.length === 0) {
    this[EVENTS_KEY] = {}
  } else if (arguments.length === 1) {
    delete this[EVENTS_KEY][type]
  } else if (events) {
    let len = events.length
    let i = 0
    let listener
    while (i < len) {
      listener = events[i]
      if (listener === fn) {
        events.splice(i, 1)
        len--
      } else {
        i++
      }
    }
    if (!events.length) delete this[EVENTS_KEY][type]
  }
}

// Trigger a given event with optional arguments.
proto.emit = function emit (type) {
  const listeners = this[EVENTS_KEY][type]
  if (!listeners) return false
  const shallowListeners = listeners.slice()

  for (let i = 0; i < shallowListeners.length; i++) {
    const listener = shallowListeners[i]
    if (listener.$once) {
      this.off(type, listener)
    }
    listener.apply(this, slice.call(arguments, 1))
  }
}

// Get the event listeners or all event listeners.
proto.getListeners = function getListeners (type) {
  if (type) {
    return this[EVENTS_KEY][type] || []
  }
  return flattenEvents(this[EVENTS_KEY])
}

export default Emitter
