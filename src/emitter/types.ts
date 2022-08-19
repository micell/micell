export type EventType = string
export type Listener = (...args: any[]) => void
export interface Events {
  [key: string]: Array<Listener>
}
