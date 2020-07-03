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
var shouldFilter = env.LOGOL_FILTER;
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
function filter() {
    var _a;
    if (shouldFilter) {
        var err = new Error();
        var stack = (_a = err.stack) === null || _a === void 0 ? void 0 : _a.split('\n')[3];
        if (stack) {
            var regex = RegExp(shouldFilter);
            return regex.test(stack);
        }
    }
    return true;
}
function showStack() {
    var _a;
    if (shouldShowStack) {
        var err = new Error();
        var stack = (_a = err.stack) === null || _a === void 0 ? void 0 : _a.split('\n')[3];
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
    filter() && exports.logol.info.apply(exports.logol, __spread([colors.bold(colors.blue('• info'))], args));
}
exports.info = info;
function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    filter() && exports.logol.log.apply(exports.logol, __spread([colors.bold('•')], showStack(), args));
}
exports.log = log;
function success() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    filter() && exports.logol.info.apply(exports.logol, __spread([colors.bold(colors.green('• success'))], colorize(args, colors.green)));
}
exports.success = success;
function debug() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    filter() && exports.logol.debug.apply(exports.logol, __spread([colors.bold(colors.gray('• debug'))], colorize(args, colors.gray)));
}
exports.debug = debug;
function warn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    filter() && exports.logol.warn.apply(exports.logol, __spread([colors.bold(colors.yellow('• warn'))], colorize(args, colors.yellow)));
}
exports.warn = warn;
function error() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    filter() && exports.logol.error.apply(exports.logol, __spread([colors.bold(colors.red('• ') + colors.bgRed('ERR'))], colorize(args, colors.red)));
}
exports.error = error;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvbG9nb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLElBQU0sR0FBRyxHQUFHLE9BQU8sSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUM1RSxJQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQU0sZUFBZSxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztBQUU3QyxTQUFTLE9BQU8sQ0FBQyxHQUFXO0lBQ3hCLE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUVELElBQUksTUFBTSxHQUFHO0lBQ1QsSUFBSSxFQUFFLE9BQU87SUFDYixPQUFPLEVBQUUsT0FBTztJQUNoQixJQUFJLEVBQUUsT0FBTztJQUNiLEtBQUssRUFBRSxPQUFPO0lBQ2QsSUFBSSxFQUFFLE9BQU87SUFDYixNQUFNLEVBQUUsT0FBTztJQUNmLEdBQUcsRUFBRSxPQUFPO0lBQ1osS0FBSyxFQUFFLE9BQU87Q0FDakIsQ0FBQztBQUVGLFNBQWdCLFNBQVMsQ0FBQyxTQUF3QjtJQUM5QyxNQUFNLEdBQUcsU0FBUyxDQUFDO0FBQ3ZCLENBQUM7QUFGRCw4QkFFQztBQUVZLFFBQUEsS0FBSyxHQUFHO0lBQ2pCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtJQUNsQixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7SUFDaEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO0lBQ3BCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtJQUNsQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7Q0FDdkIsQ0FBQztBQUVGLFNBQVMsUUFBUSxDQUFDLElBQVcsRUFBRSxFQUFPO0lBQ2xD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