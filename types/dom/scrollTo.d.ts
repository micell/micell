export interface Options {
    x?: number;
    y?: number;
    left?: number;
    top?: number;
    easing?: string;
    behavior?: ScrollBehavior;
}
export default function scrollTo(elOrWindow: Element | Window | number | Options, x?: number | Options, y?: number): void;
