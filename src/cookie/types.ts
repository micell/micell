export interface Cookies {
  [key: string]: string;
}

export interface CookieOptions {
  domain?: string;
  path?: string;
  expires?: number | string | Date;
  'max-age'?: number;
  secure?: boolean;
  samesite?: string;
}

export type CookieDecoder<T = string> = (value: string) => T
export type CookieEncoder<T = string> = (value: T) => string
