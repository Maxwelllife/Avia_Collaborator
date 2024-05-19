declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg' {
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}