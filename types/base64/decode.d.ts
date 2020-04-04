interface Options {
    encoding?: 'utf8' | 'binary' | 'hex';
}
export default function decode(input: string, options?: Options): Array<number> | string;
export {};
