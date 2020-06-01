function noColor(val: string) {
    return val;
}

let colors = {
    bold: noColor,
    blue: noColor,
    green: noColor,
    gray: noColor,
    yellow: noColor,
    red: noColor,
    bgRed: noColor,
}

export function setColors(newColors: typeof colors) {
    colors = newColors;
}

export const logol = {
    info: console.info,
    log: console.log,
    debug: console.debug,
    warn: console.warn,
    error: console.error,
};

function colorize(args: any[], fn: any) {
    return args.map((arg) =>
        (['string', 'number'] as any).includes(typeof arg) ? fn(arg) : arg,
    );
}

export function info(...args: any) {
    logol.info(colors.bold(colors.blue('• info')), ...args);
}

export function log(...args: any) {
    logol.log(colors.bold('•'), ...args);
}

export function success(...args: any) {
    logol.info(
        colors.bold(colors.green('• success')),
        ...colorize(args, colors.green),
    );
}

export function debug(...args: any) {
    logol.debug(
        colors.bold(colors.gray('• debug')),
        ...colorize(args, colors.gray),
    );
}

export function warn(...args: any) {
    logol.warn(
        colors.bold(colors.yellow('• warn')),
        ...colorize(args, colors.yellow),
    );
}

export function error(...args: any) {
    logol.error(
        colors.bold(colors.red('• ') + colors.bgRed('ERR')),
        ...colorize(args, colors.red),
    );
}
