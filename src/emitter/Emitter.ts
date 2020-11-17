import flattenEvents from './util/flattenEvents'
import { EventType, Listener, Events } from './types'

const EVENTS_KEY = '@events'

class Emitter {
  [EVENTS_KEY]: Events;

  constructor() {
    this[EVENTS_KEY] = {} as Events
  }

  // Add a listener for a given event.
  on (type: EventType, fn: Listener): void {
    (this[EVENTS_KEY][type] = this[EVENTS_KEY][type] || []).push(fn)
  }

  // Add a listener for a given event.
  // This listener can be called once, then will be removed.
  once (type: EventType, fn: Listener): void {
    const wrapped = function wrapped(...args: any[]): any {
      // @ts-ignore
      return fn.apply(this, args)
    }
    wrapped.$once = true
    this.on(type, wrapped)
  }

  // Remove all event listeners
  // or remove the given event listeners
  // or remove the specified listener for the given event.
  off (type?: EventType, fn?: Listener): void {
    // @ts-ignore
    const events = this[EVENTS_KEY][type]

    if (arguments.length === 0) {
      this[EVENTS_KEY] = {} as Events
    } else if (arguments.length === 1) {
      // @ts-ignore
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
      if (!events.length) {
        // @ts-ignore
        delete this[EVENTS_KEY][type]
      }
    }
  }

  // Trigger a given event with optional arguments.
  emit (type: EventType, ...args: any[]): void {
    const listeners = this[EVENTS_KEY][type]
    if (!listeners) return
    const shallowListeners = listeners.slice()

    for (let i = 0; i < shallowListeners.length; i++) {
      const listener = shallowListeners[i]
      // @ts-ignore
      if (listener.$once) {
        this.off(type, listener)
      }
      listener.apply(this, args)
    }
  }

  // Get the event listeners or all event listeners.
  getListeners (type?: EventType): Array<Listener> {
    if (type) {
      return this[EVENTS_KEY][type] || ([] as Array<Listener>)
    }
    return flattenEvents(this[EVENTS_KEY])
  }
}

export default Emitter
