"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.warn = exports.debug = exports.success = exports.log = exports.info = exports.logol = exports.setColors = void 0;
// @ts-ignore
// prettier-ignore
var env = typeof Deno !== 'undefined' ? Deno.env.toObject() : process.env;
var shouldFilterStack = env.LOGOL_FILTER;
var shouldFilterLevels = env.LOGOL_LEVELS && env.LOGOL_LEVELS.split(',');
var shouldShowStack = env.LOGOL_SHOW_STACK;
function noColor(val) {
    return val;
}
var colors = {
    bold: noColor,
    magenta: noColor,
    blue: noColor,
    green: noColor,
    gray: noColor,
    yellow: noColor,
    red: noColor,
    bgRed: noColor,
};
function setColors(newColors) {
    colors = newColors;
}
exports.setColors = setColors;
exports.logol = {
    info: console.info,
    log: console.log,
    debug: console.debug,
    warn: console.warn,
    error: console.error,
};
function colorize(args, fn) {
    return args.map(function (arg) {
        return ['string', 'number'].includes(typeof arg) ? fn(arg) : arg;
    });
}
function getStack(err) {
    var _a;
    return (_a = err.stack) === null || _a === void 0 ? void 0 : _a.split('\n')[3];
}
function filter(level) {
    if (shouldFilterLevels && !shouldFilterLevels.includes(level)) {
        return false;
    }
    if (shouldFilterStack) {
        var stack = getStack(new Error());
        if (stack) {
            var regex = RegExp(shouldFilterStack);
            return regex.test(stack);
        }
    }
    return true;
}
function showStack() {
    if (shouldShowStack) {
        var stack = getStack(new Error());
        if (stack) {
            return [colors.magenta("[" + stack.trim() + "]")];
        }
    }
    return [];
}
function info() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    filter('info') && exports.logol.info.apply(exports.logol, __spread([colors.bold(colors.blue('• info'))], showStack(), args));
}
exports.info = info;
function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    filter('log') && exports.logol.log.apply(exports.logol, __spread([colors.bold('•')], showStack(), args));
}
exports.log = log;
function success() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    filter('success') && exports.logol.info.apply(exports.logol, __spread([colors.bold(colors.green('• success'))], showStack(), colorize(args, colors.green)));
}
exports.success = success;
function debug() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    filter('debug') && exports.logol.debug.apply(exports.logol, __spread([colors.bold(colors.gray('• debug'))], showStack(), colorize(args, colors.gray)));
}
exports.debug = debug;
function warn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    filter('warn') && exports.logol.warn.apply(exports.logol, __spread([colors.bold(colors.yellow('• warn'))], showStack(), colorize(args, colors.yellow)));
}
exports.warn = warn;
function error() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    filter('error') && exports.logol.error.apply(exports.logol, __spread([colors.bold(colors.red('• ') + colors.bgRed('ERR'))], showStack(), colorize(args, colors.red)));
}
exports.error = error;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvbG9nb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLElBQU0sR0FBRyxHQUFHLE9BQU8sSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUM1RSxJQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7QUFDM0MsSUFBTSxrQkFBa0IsR0FBRyxHQUFHLENBQUMsWUFBWSxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNFLElBQU0sZUFBZSxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztBQUU3QyxTQUFTLE9BQU8sQ0FBQyxHQUFXO0lBQ3hCLE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUVELElBQUksTUFBTSxHQUFHO0lBQ1QsSUFBSSxFQUFFLE9BQU87SUFDYixPQUFPLEVBQUUsT0FBTztJQUNoQixJQUFJLEVBQUUsT0FBTztJQUNiLEtBQUssRUFBRSxPQUFPO0lBQ2QsSUFBSSxFQUFFLE9BQU87SUFDYixNQUFNLEVBQUUsT0FBTztJQUNmLEdBQUcsRUFBRSxPQUFPO0lBQ1osS0FBSyxFQUFFLE9BQU87Q0FDakIsQ0FBQztBQUVGLFNBQWdCLFNBQVMsQ0FBQyxTQUF3QjtJQUM5QyxNQUFNLEdBQUcsU0FBUyxDQUFDO0FBQ3ZCLENBQUM7QUFGRCw4QkFFQztBQUVZLFFBQUEsS0FBSyxHQUFHO0lBQ2pCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtJQUNsQixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7SUFDaEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO0lBQ3BCLElBQUksRUFBRSxPQUFPLENB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