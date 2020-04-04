export interface Options {
    callback?: string;
    responseType?: string;
    timeout?: number;
}
export default function jsonp(url: string, options?: Options): Promise<any>;
