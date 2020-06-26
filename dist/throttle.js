"use strict";
/*
 * throttle
 *
 * type: Stream value transformation
 *
 * `throttle` buffers emitting the value for a given amount of time, in
 * milliseconds.
 *
 * ```
 * throttle(3000) // assuming each change happens in 1s
 * ```
 * changes 123456789012345678---
 * emits   1---5---9---3---7---8
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
// this way it works both in node and browser
var timer;
exports.default = (function (ms) { return function (source) { return function (next) {
    return source(function (value) {
        clearTimeout(timer);
        timer = setTimeout(function () { return next(value); }, ms);
    });
}; }; });
//# sourceMappingURL=throttle.js.map