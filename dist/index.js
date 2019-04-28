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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
function colorize(args, fn) {
    return args.map(function (arg) { return ['string', 'number'].includes(typeof (arg)) ? fn(arg) : arg; });
}
function info() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.info.apply(console, __spread([chalk_1.default.bold(chalk_1.default.blue('• info'))], args));
}
exports.info = info;
function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log.apply(console, __spread([chalk_1.default.bold('•')], args));
}
exports.log = log;
function success() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.info.apply(console, __spread([chalk_1.default.bold(chalk_1.default.green('• success'))], colorize(args, chalk_1.default.green)));
}
exports.success = success;
function debug() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.debug.apply(console, __spread([chalk_1.default.bold(chalk_1.default.gray('• debug'))], colorize(args, chalk_1.default.gray)));
}
exports.debug = debug;
function warn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.warn.apply(console, __spread([chalk_1.default.bold(chalk_1.default.yellow('• warn'))], colorize(args, chalk_1.default.yellow)));
}
exports.warn = warn;
function error() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.error.apply(console, __spread([chalk_1.default.bold(chalk_1.default.red('• ') + chalk_1.default.bgRed('ERR'))], colorize(args, chalk_1.default.red)));
}
exports.error = error;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMEI7QUFFMUIsU0FBUyxRQUFRLENBQUMsSUFBVyxFQUFFLEVBQU87SUFDbEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFTLENBQUMsUUFBUSxDQUFDLE9BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBbkUsQ0FBbUUsQ0FBRSxDQUFDO0FBQ2pHLENBQUM7QUFFRCxTQUFnQixJQUFJO0lBQUMsY0FBWTtTQUFaLFVBQVksRUFBWixxQkFBWSxFQUFaLElBQVk7UUFBWix5QkFBWTs7SUFDN0IsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLFlBQU0sZUFBSyxDQUFDLElBQUksQ0FBQyxlQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUssSUFBSSxHQUFFO0FBQzVELENBQUM7QUFGRCxvQkFFQztBQUVELFNBQWdCLEdBQUc7SUFBQyxjQUFZO1NBQVosVUFBWSxFQUFaLHFCQUFZLEVBQVosSUFBWTtRQUFaLHlCQUFZOztJQUM1QixPQUFPLENBQUMsR0FBRyxPQUFYLE9BQU8sWUFBSyxlQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFLLElBQUksR0FBRTtBQUMxQyxDQUFDO0FBRkQsa0JBRUM7QUFFRCxTQUFnQixPQUFPO0lBQUMsY0FBWTtTQUFaLFVBQVksRUFBWixxQkFBWSxFQUFaLElBQVk7UUFBWix5QkFBWTs7SUFDaEMsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLFlBQU0sZUFBSyxDQUFDLElBQUksQ0FBQyxlQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUssUUFBUSxDQUFDLElBQUksRUFBRSxlQUFLLENBQUMsS0FBSyxDQUFDLEdBQUU7QUFDdkYsQ0FBQztBQUZELDBCQUVDO0FBRUQsU0FBZ0IsS0FBSztJQUFDLGNBQVk7U0FBWixVQUFZLEVBQVoscUJBQVksRUFBWixJQUFZO1FBQVoseUJBQVk7O0lBQzlCLE9BQU8sQ0FBQyxLQUFLLE9BQWIsT0FBTyxZQUFPLGVBQUssQ0FBQyxJQUFJLENBQUMsZUFBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZUFBSyxDQUFDLElBQUksQ0FBQyxHQUFFO0FBQ3BGLENBQUM7QUFGRCxzQkFFQztBQUVELFNBQWdCLElBQUk7SUFBQyxjQUFZO1NBQVosVUFBWSxFQUFaLHFCQUFZLEVBQVosSUFBWTtRQUFaLHlCQUFZOztJQUM3QixPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8sWUFBTSxlQUFLLENBQUMsSUFBSSxDQUFDLGVBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFLGVBQUssQ0FBQyxNQUFNLENBQUMsR0FBRTtBQUN0RixDQUFDO0FBRkQsb0JBRUM7QUFFRCxTQUFnQixLQUFLO0lBQUMsY0FBWTtTQUFaLFVBQVksRUFBWixxQkFBWSxFQUFaLElBQVk7UUFBWix5QkFBWTs7SUFDOUIsT0FBTyxDQUFDLEtBQUssT0FBYixPQUFPLFlBQU8sZUFBSyxDQUFDLElBQUksQ0FBQyxlQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLGVBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFLGVBQUssQ0FBQyxHQUFHLENBQUMsR0FBRTtBQUNsRyxDQUFDO0FBRkQsc0JBRUMifQ==