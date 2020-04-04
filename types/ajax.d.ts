export interface Options {
    async?: boolean;
    beforeSend?: (xhr: XMLHttpRequest) => void | boolean;
    data?: any;
    headers?: {
        [key: string]: string;
    };
    method?: string;
    responseType?: XMLHttpRequestResponseType;
    timeout?: number;
}
export default function ajax(url: string, options?: Options): Promise<XMLHttpRequest>;
