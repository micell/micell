import hasOwn from '../_internal/hasOwn'
import enUS from './i18n/timeAgo/en_US'
import zhCN from './i18n/timeAgo/zh_CN'

export type TimeAgoLocale = Array<[string, string]>

interface TimeAgoLocales {
  [key: string]: TimeAgoLocale;
}

const locales: TimeAgoLocales = {
  'en_US': enUS,
  'zh_CN': zhCN
}

let currentLocale = 'en_US'

export interface TimeAgo {
  getLocale(): string;
  setLocale(name: string): void;
  addLocale(name: string, locale: TimeAgoLocale): void;
  format(date: number | string | Date, locale?: string, nowDate?: Date): string;
}

const timeAgo: TimeAgo = {
  getLocale (): string {
    return currentLocale
  },

  setLocale (name: string): void {
    if (hasOwn(locales, name)) {
      currentLocale = name
    }
  },

  addLocale (name: string, locale: TimeAgoLocale): void {
    locales[name] = locale
  },

  format (date: number | string | Date, locale: string = currentLocale, nowDate: Date = new Date()): string {
    const d = new Date(date)
    const actualLocale = hasOwn(locales, locale) ? locale : currentLocale
    const sign = nowDate.getTime() - d.getTime() >= 0 ? 1 : -1
    const diff = Math.abs(nowDate.getTime() - d.getTime())
    const years = Math.floor(diff / (365 * 24 * 60 * 60 * 1000))
    const months = Math.floor(diff / (30 * 24 * 60 * 60 * 1000))
    const weeks = Math.floor(diff / (7 * 24 * 60 * 60 * 1000))
    const days = Math.floor(diff / (24 * 60 * 60 * 1000))
    const hours = Math.floor(diff / (60 * 60 * 1000))
    const minutes = Math.floor(diff / (60 * 1000))
    const seconds = Math.floor(diff / 1000)
    let index = 0
    let number = 0

    if (seconds === 0) {
      index = 0
      number = 0
    } else if (seconds >= 1 && minutes === 0) {
      index = 1
      number = seconds
    } else if (minutes === 1) {
      index = 2
      number = minutes
    } else if (minutes > 1 && hours === 0) {
      index = 3
      number = minutes
    } else if (hours === 1) {
      index = 4
      number = hours
    } else if (hours > 1 && days === 0) {
      index = 5
      number = hours
    } else if (days === 1) {
      index = 6
      number = days
    } else if (days > 1 && weeks === 0) {
      index = 7
      number = days
    } else if (weeks === 1) {
      index = 8
      number = weeks
    } else if (weeks > 1 && months === 0) {
      index = 9
      number = weeks
    } else if (months === 1) {
      index = 10
      number = months
    } else if (months > 1 && years === 0) {
      index = 11
      number = months
    } else if (years === 1) {
      index = 12
      number = years
    } else {
      index = 13
      number = years
    }

    const tmplPair = locales[actualLocale][index]
    const tmpl = sign > 0 ? tmplPair[0] : tmplPair[1]
    return tmpl.replace(/%s/, String(number))
  }
}

export default timeAgo
