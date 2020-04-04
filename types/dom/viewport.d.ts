interface Viewport {
    width: number;
    height: number;
}
export default function viewport(elOrWindow: Element | Window): Viewport;
export {};
