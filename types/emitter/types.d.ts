export declare type EventType = string;
export declare type Listener = (...args: any[]) => void;
export interface Events {
    [key: string]: Array<Listener>;
}
