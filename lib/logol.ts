// @ts-ignore
// prettier-ignore
const env = typeof Deno !== 'undefined' ? Deno.env.toObject() : process.env;
const shouldFilterStack = env.LOGOL_FILTER;
const shouldFilterLevels = env.LOGOL_LEVELS && env.LOGOL_LEVELS.split(',');
const shouldShowStack = env.LOGOL_SHOW_STACK;

function noColor(val: string) {
    return val;
}

let colors = {
    bold: noColor,
    magenta: noColor,
    blue: noColor,
    green: noColor,
    gray: noColor,
    yellow: noColor,
    red: noColor,
    bgRed: noColor,
};

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

function getStack(err: Error) {
    return err.stack?.split('\n')[3];
}

function filter(level: string) {
    if (shouldFilterLevels && !shouldFilterLevels.includes(level)) {
        return false;
    }
    if (shouldFilterStack) {
        const stack = getStack(new Error());
        if (stack) {
            const regex = RegExp(shouldFilterStack);
            return regex.test(stack);
        }
    }
    return true;
}

function showStack() {
    if (shouldShowStack) {
        const stack = getStack(new Error());
        if (stack) {
            return [colors.magenta(`[${stack.trim()}]`)];
        }
    }
    return [];
}

export function info(...args: any) {
    filter('info') &&
        logol.info(colors.bold(colors.blue('• info')), ...showStack(), ...args);
}

export function log(...args: any) {
    filter('log') && logol.log(colors.bold('•'), ...showStack(), ...args);
}

export function success(...args: any) {
    filter('success') &&
        logol.info(
            colors.bold(colors.green('• success')),
            ...showStack(),
            ...colorize(args, colors.green),
        );
}

export function debug(...args: any) {
    filter('debug') &&
        logol.debug(
            colors.bold(colors.gray('• debug')),
            ...showStack(),
            ...colorize(args, colors.gray),
        );
}

export function warn(...args: any) {
    filter('warn') &&
        logol.warn(
            colors.bold(colors.yellow('• warn')),
            ...showStack(),
            ...colorize(args, colors.yellow),
        );
}

export function error(...args: any) {
    filter('error') &&
        logol.error(
            colors.bold(colors.red('• ') + colors.bgRed('ERR')),
            ...showStack(),
            ...colorize(args, colors.red),
        );
}
