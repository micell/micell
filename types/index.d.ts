declare namespace micell.base64 {
  export function encode(input: string | number[] | Uint8Array): string;
  export function decode(input: string): string | number[];
}

declare namespace micell.char {
  export function isAlphabetic(ch: string): boolean;
  export function isASCII(ch: string): boolean;
  export function isAlphanumeric(ch: string): boolean;
  export function isCJK(ch: string): boolean;
  export function isControl(ch: string): boolean;
  export function isDigit(ch: string): boolean;
  export function isGraph(ch: string): boolean;
  export function isHexadecimal(ch: string): boolean;
  export function isLower(ch: string): boolean;
  export function isPrint(ch: string): boolean;
  export function isPunctuation(ch: string): boolean;
  export function isSpace(ch: string): boolean;
  export function isUpper(ch: string): boolean;
}

declare namespace micell.cookie {
  export interface Cookies {
    [key: string]: string;
  }
  export interface CookieOptions {
    domain?: string;
    path?: string;
    expires?: number | number | Date;
    'max-age'?: number;
    secure?: boolean;
    samesite?: string;
  }
  export type Decoder<T = string> = (value: string) => T;
  export type Encoder<T = string> = (value: T) => string;

  export function get(key: string, decoder?: Decoder): string;
  export function getAll(): Cookies;
  export function getJson(key: string): any;
  export function getRaw(key: string): string;
  export function isEnabled(): boolean;
  export function remove(key: string, options?: CookieOptions): void;
  export function set(key: string, value: string, options?: CookieOptions, encoder?: Encoder): void;
  export function setJson(key: string, value: any, options?: CookieOptions): void;
  export function setRaw(key: string, value: string, options?: CookieOptions): void;
}

declare namespace micell.date {
  export type ParsableDate = Number | String | Date;
  export type RoundFunc = (num: number) number;

  export function diff(date1: ParsableDate, date2: ParsableDate, unit?: string, roundFunc?: RoundFunc): number;
  export function format(date: Date | Number, format: String, isUTC?: boolean): string;
}

declare namespace micell.date.timeAgo {
  export function getLocale(): string;
  export function setLocale(name: string): void;
  export function addLocale(name: string, locale: [string, string][]): void;
  export function format(date: Date, locale?: string, nowDate?: Date): string;
}

declare namespace micell.dom {
  export interface EventInit {
    bubbles?: boolean;
    cancelable?: boolean;
    detail?: object;
  }

  export interface ScriptProperties {
    type?: string;
    async?: boolean;
    defer?: boolean;
    onerror?(err: Error): void;
    onload?(): void;
  }

  export interface Viewport {
    width: number;
    height: number;
  }

  export interface ExScrollToOptions {
    x?: number;
    y?: number;
    left?: number;
    top?: number;
    behavior?: 'auto' | 'smooth'
    easing?: string
  }

  export function clientX(el: Element): number;
  export function clientY(el: Element): number;
  export function createEvent(type: string, options?: EventInit): Event;
  export function domReady(fn: Function): void;
  export function insertScript(src: string, options?: ScriptProperties): number;
  export function isElement(value: any): boolean;
  export function isInViewport(el: Element): boolean;
  export function isWindow(value: any): boolean;
  export function pageX(el: Element): number;
  export function pageY(el: Element): number;
  export function scrollTo(x: number, y: number): void;
  export function scrollTo(elOrWindow: Element | Window, x: number, y: number): void;
  export function scrollTo(options: ExScrollToOptions): void;
  export function scrollTo(elOrWindow: Element | Window, options: ExScrollToOptions): void;
  export function scrollX(elOrWindow?: Element | Window): number;
  export function scrollY(elOrWindow?: Element | Window): number;
  export function viewport(elOrWindow?: Window | Element): Viewport;
}

declare namespace micell.easing {
  export function cubicBezier(x1: number, y1: number, x2: number, y2: number): (x: number) => number;
  export function ease(x: number): number;
  export function easeIn(x: number): number;
  export function easeInOut(x: number): number;
  export function easeOut(x: number): number;
  export function linear(x: number): number;
}

declare namespace micell.emitter {
  type EventType = string | symbol;
  type Listener = (...args: any[]) => void;

  export interface Emitter {
    new(): Emitter;

    emit(event: EventType, ...args: any[]): boolean;
    getListeners(event?: EventType): Array<Listener>;
    off(event?: EventType, listener?: Listener): void;
    on(event: EventType, listener: Listener): void;
    once(event: EventType, listener: Listener): void;
  }

  export function create(): Emitter;
  export function emit(event: EventType, ...args: any[]): boolean;
  export function getListeners(event?: EventType): Array<Listener>;
  export function off(event?: EventType, listener?: Listener): this;
  export function on(event: EventType, listener: Listener): void;
  export function once(event: EventType, listener: Listener): this;
}

declare namespace micell.lang {
  export function isArray(value: any): boolean;
  export function isBoolean(value: any): boolean;
  export function isDate(value: any): boolean;
  export function isError(value: any): boolean;
  export function isFunction(value: any): boolean;
  export function isNil(value: any): boolean;
  export function isNull(value: any): boolean;
  export function isNumber(value: any): boolean;
  export function isObject(value: any): boolean;
  export function isRegExp(value: any): boolean;
  export function isString(value: any): boolean;
  export function isUndefined(value: any): boolean;
}

declare namespace micell.path {
  export function basename(path: string, ext?: string, sep?: string): string;
  export function dirname(path: string, sep?: string): string;
  export function extname(path: string): string;
}

declare namespace micell.qs {
  export interface Query {
    [key: string]: string;
  }
  export function get(key: string, search?: string): string;
  export function parse(search?: string): Query;
  export function stringify(query: Query): string;
}

declare namespace micell.regex {
  export const ascii: RegExp;
  export const decimal: RegExp;
  export const digit: RegExp;
  export const domain: RegExp;
  export const email: RegExp;
  export const hexColor: RegExp;
  export const hsl: RegExp;
  export const hsla: RegExp;
  export const integer: RegExp;
  export const ipv4: RegExp;
  export const ipv6: RegExp;
  export function isAscii(str: string): boolean;
  export function isDecimal(str: string): boolean;
  export function isDigit(str: string): boolean;
  export function isDomain(str: string): boolean;
  export function isEmail(str: string): boolean;
  export function isHexColor(str: string): boolean;
  export function isHsl(str: string): boolean;
  export function isHsla(str: string): boolean;
  export function isIP(str: string): boolean;
  export function isIPv4(str: string): boolean;
  export function isIPv6(str: string): boolean;
  export function isInteger(str: string): boolean;
  export function isQQ(str: string): boolean;
  export function isRealNumber(str: string): boolean;
  export function isRgb(str: string): boolean;
  export function isRgba(str: string): boolean;
  export const qq: RegExp;
  export const realNumber: RegExp;
  export const rgb: RegExp;
  export const rgba: RegExp;
}

declare namespace micell.string {
  export interface TruncateOptions {
    length?: number;
    omission?: string;
    countType?: 0 | 1 | 2;
  }

  export function countChars(str: string, type: 0 | 1 | 2): number;
  export function countLines(str: string, newline: string): number;
  export function escapeRegexp(str: string): string;
  export function firstChar(str: string): string;
  export function isValidJSON(str: string): boolean;
  export function lastChar(str: string): string;
  export function truncate(str: string, options: TruncateOptions): string;
}

declare namespace micell.ua {
  export function isAndroid(ua: string): boolean;
  export function isIOS(ua: string): boolean;
  export function isIPad(ua: string): boolean;
  export function isIPhone(ua: string): boolean;
  export function isLinux(ua: string): boolean;
  export function isMacOS(ua: string): boolean;
  export function isMobile(ua: string): boolean;
  export function isTablet(ua: string): boolean;
  export function isWeChat(ua: string): boolean;
  export function isWindows(ua: string): boolean;
}

declare namespace micell.url {
  export function parse(url: string): object;
  export function stringify(urlParts: object): string;
}

declare namespace micell {
  export interface AjaxOptions {
    async?: boolean;
    beforeSend?(xhr: XMLHttpRequest): boolean;
    data?: any;
    headers?: object;
    method?: string;
    responseType?: string;
    timeout?: number;
  }

  export interface JsonpOptions {
    callback?: string;
    responseType?: string;
    timeout?: number;
  }

  export function ajax(url: string, options?: AjaxOptions): Proimise;

  export function css(el: Element, prop: string): string;
  export function css(el: string, prop: string): string;
  export function css(el: Element, prop: object): void;
  export function css(el: string, prop: object): void;
  export function css(el: Element): CSSStyleDeclaration;
  export function css(el: string): CSSStyleDeclaration;

  export function delay(duration?: number): Promise;

  export function jsonp(url: string, options?: JsonpOptions): Promise;

  export function md5(input: string | number[] | Uint8Array): string;

  export function noop(): void;

  export function numberFormat(number: number, digits?: number, dot?: string, sep?: string): string;

  export function raf(callback: (time: number) => void): number;

  export function randomString(len?: number, chars?: string): string;

  export function uuid(): string;
}

export default micell;
