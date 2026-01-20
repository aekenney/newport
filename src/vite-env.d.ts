/// <reference types="vite/client" />

declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.css' {
    const content: string;
    export default content;
}

interface ImportMetaEnv {
    readonly VITE_GEMINI_API_KEY?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
