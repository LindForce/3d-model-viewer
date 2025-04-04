declare namespace JSX {
    interface IntrinsicElements {
        'model-viewer': any;
    }
}

declare module '*.glb' {
    const src: string;
    export default src;
}
