import { Query } from '../qs/parse';
export interface URLObj {
    hash: string;
    host: string;
    hostname: string;
    href: string;
    origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    query: Query;
    search: string;
    username: string;
}
export default function parse(url: string): URLObj;
