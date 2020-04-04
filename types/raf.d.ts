declare type AnyFunc = (...args: any[]) => void;
declare function exposeRaf(fn: AnyFunc): number;
declare namespace exposeRaf {
    var cancel: (timerId: number) => void;
}
export default exposeRaf;
