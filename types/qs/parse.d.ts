export interface Query {
    [key: string]: string | Array<string>;
}
export default function parse(search?: string): Query;
