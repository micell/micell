import { EventType, Listener, Events } from './types';
declare const EVENTS_KEY = "@events";
declare class Emitter {
    [EVENTS_KEY]: Events;
    constructor();
    on(type: EventType, fn: Listener): void;
    once(type: EventType, fn: Listener): void;
    off(type?: EventType, fn?: Listener): void;
    emit(type: EventType, ...args: any[]): void;
    getListeners(type?: EventType): Array<Listener>;
}
export default Emitter;
