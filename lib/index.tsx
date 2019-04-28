import chalk from 'chalk';

function colorize(args: any[], fn: any) {
    return args.map(arg => (['string', 'number'] as any).includes(typeof(arg)) ? fn(arg) : arg );
}

export function info(...args: any) {
    console.info(chalk.bold(chalk.blue('• info')), ...args);
}

export function log(...args: any) {
    console.log(chalk.bold('•'), ...args);
}

export function success(...args: any) {
    console.info(chalk.bold(chalk.green('• success')), ...colorize(args, chalk.green));
}

export function debug(...args: any) {
    console.debug(chalk.bold(chalk.gray('• debug')), ...colorize(args, chalk.gray));
}

export function warn(...args: any) {
    console.warn(chalk.bold(chalk.yellow('• warn')), ...colorize(args, chalk.yellow));
}

export function error(...args: any) {
    console.error(chalk.bold(chalk.red('• ') + chalk.bgRed('ERR')), ...colorize(args, chalk.red));
}
