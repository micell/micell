interface Options {
    length?: number;
    omission?: string;
    countType?: number;
}
export default function truncate(str?: string, options?: Options): string;
export {};
