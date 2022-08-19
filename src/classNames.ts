import isObject from './lang/isObject'
import isArray from './lang/isArray'
import isString from './lang/isString'

type Falsy = undefined | null | false | 0 | ''

interface ArgMap {
  [key: string]: any
}

type ArgArray = Array<string | ArgMap | Falsy>

type Arg = string | ArgMap | ArgArray | Falsy

export default function classNames(...args: Arg[]): string {
  let cls = ''

  for (const arg of args) {
    if (isString(arg)) {
      cls += ` ${arg}`
    } else if (isObject(arg)) {
      const keys = Object.keys(arg as ArgMap)
      for (const key of keys) {
        if ((arg as ArgMap)[key]) {
          cls += ` ${key}`
        }
      }
    } else if (isArray(arg)) {
      cls += ` ${classNames(...(arg as ArgArray))}`
    }
  }

  return cls.slice(1)
}
