export interface Options {
    bubbles?: boolean;
    cancelable?: boolean;
    detail?: any;
}
export default function createEvent(type: string, options?: Options): CustomEvent<any>;
