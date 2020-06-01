declare function noColor(val: string): string;
declare let colors: {
    bold: typeof noColor;
    blue: typeof noColor;
    green: typeof noColor;
    gray: typeof noColor;
    yellow: typeof noColor;
    red: typeof noColor;
    bgRed: typeof noColor;
};
export declare function setColors(newColors: typeof colors): void;
export declare const logol: {
    info: (message?: any, ...optionalParams: any[]) => void;
    log: (message?: any, ...optionalParams: any[]) => void;
    debug: (message?: any, ...optionalParams: any[]) => void;
    warn: (message?: any, ...optionalParams: any[]) => void;
    error: (message?: any, ...optionalParams: any[]) => void;
};
export declare function info(...args: any): void;
export declare function log(...args: any): void;
export declare function success(...args: any): void;
export declare function debug(...args: any): void;
export declare function warn(...args: any): void;
export declare function error(...args: any): void;
export {};
