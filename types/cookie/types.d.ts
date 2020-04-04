export interface Cookies {
    [key: string]: string;
}
export interface Options {
    domain?: string;
    path?: string;
    expires?: number | string | Date;
    'max-age'?: number;
    secure?: boolean;
    samesite?: string;
}
export declare type Decoder<T = string> = (value: string) => T;
export declare type Encoder<T = string> = (value: T) => string;
