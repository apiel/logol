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
function noColor(val) {
    return val;
}
var colors = {
    bold: noColor,
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
function info() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    exports.logol.info.apply(exports.logol, __spread([colors.bold(colors.blue('• info'))], args));
}
exports.info = info;
function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    exports.logol.log.apply(exports.logol, __spread([colors.bold('•')], args));
}
exports.log = log;
function success() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    exports.logol.info.apply(exports.logol, __spread([colors.bold(colors.green('• success'))], colorize(args, colors.green)));
}
exports.success = success;
function debug() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    exports.logol.debug.apply(exports.logol, __spread([colors.bold(colors.gray('• debug'))], colorize(args, colors.gray)));
}
exports.debug = debug;
function warn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    exports.logol.warn.apply(exports.logol, __spread([colors.bold(colors.yellow('• warn'))], colorize(args, colors.yellow)));
}
exports.warn = warn;
function error() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    exports.logol.error.apply(exports.logol, __spread([colors.bold(colors.red('• ') + colors.bgRed('ERR'))], colorize(args, colors.red)));
}
exports.error = error;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvbG9nb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsT0FBTyxDQUFDLEdBQVc7SUFDeEIsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBRUQsSUFBSSxNQUFNLEdBQUc7SUFDVCxJQUFJLEVBQUUsT0FBTztJQUNiLElBQUksRUFBRSxPQUFPO0lBQ2IsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUUsT0FBTztJQUNiLE1BQU0sRUFBRSxPQUFPO0lBQ2YsR0FBRyxFQUFFLE9BQU87SUFDWixLQUFLLEVBQUUsT0FBTztDQUNqQixDQUFBO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLFNBQXdCO0lBQzlDLE1BQU0sR0FBRyxTQUFTLENBQUM7QUFDdkIsQ0FBQztBQUZELDhCQUVDO0FBRVksUUFBQSxLQUFLLEdBQUc7SUFDakIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO0lBQ2xCLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRztJQUNoQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7SUFDcEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO0lBQ2xCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztDQUN2QixDQUFDO0FBRUYsU0FBUyxRQUFRLENBQUMsSUFBVyxFQUFFLEVBQU87SUFDbEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRztRQUNoQixPQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7SUFBbEUsQ0FBa0UsQ0FDckUsQ0FBQztBQUNOLENBQUM7QUFFRCxTQUFnQixJQUFJO0lBQUMsY0FBWTtTQUFaLFVBQVksRUFBWixxQkFBWSxFQUFaLElBQVk7UUFBWix5QkFBWTs7SUFDN0IsYUFBSyxDQUFDLElBQUksT0FBVixhQUFLLFlBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUssSUFBSSxHQUFFO0FBQzVELENBQUM7QUFGRCxvQkFFQztBQUVELFNBQWdCLEdBQUc7SUFBQyxjQUFZO1NBQVosVUFBWSxFQUFaLHFCQUFZLEVBQVosSUFBWTtRQUFaLHlCQUFZOztJQUM1QixhQUFLLENBQUMsR0FBRyxPQUFULGFBQUssWUFBSyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFLLElBQUksR0FBRTtBQUN6QyxDQUFDO0FBRkQsa0JBRUM7QUFFRCxTQUFnQixPQUFPO0lBQUMsY0FBWTtTQUFaLFVBQVksRUFBWixxQkFBWSxFQUFaLElBQVk7UUFBWix5QkFBWTs7SUFDaEMsYUFBSyxDQUFDLElBQUksT0FBVixhQUFLLFlBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQ25DLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUNqQztBQUNOLENBQUM7QUFMRCwwQkFLQztBQUVELFNBQWdCLEtBQUs7SUFBQyxjQUFZO1NBQVosVUFBWSxFQUFaLHFCQUFZLEVBQVosSUFBWTtRQUFaLHlCQUFZOztJQUM5QixhQUFLLENBQUMsS0FBSyxPQUFYLGFBQUssWUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FDaEMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQ2hDO0FBQ04sQ0FBQztBQUxELHNCQUtDO0FBRUQsU0FBZ0IsSUFBSTtJQUFDLGNBQVk7U0FBWixVQUFZLEVBQVoscUJBQVksRUFBWixJQUFZO1FBQVoseUJBQVk7O0lBQzdCLGFBQUssQ0FBQyxJQUFJLE9BQVYsYUFBSyxZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUNqQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FDbEM7QUFDTixDQUFDO0FBTEQsb0JBS0M7QUFFRCxTQUFnQixLQUFLO0lBQUMsY0FBWTtTQUFaLFVBQVksRUFBWixxQkFBWSxFQUFaLElBQVk7UUFBWix5QkFBWTs7SUFDOUIsYUFBSyxDQUFDLEtBQUssT0FBWCxhQUFLLFlBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FDaEQsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQy9CO0FBQ04sQ0FBQztBQUxELHNCQUtDIn0=