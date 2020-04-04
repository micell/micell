export interface URLParts {
    hash?: string;
    host?: string;
    hostname?: string;
    password?: string;
    pathname?: string;
    port?: string;
    protocol: string;
    query?: object;
    search?: string;
    username?: string;
}
export default function stringify(urlParts: URLParts): string;
