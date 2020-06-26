"use strict";
/*
 * stop
 *
 * type: Stream value transformation
 *
 * `stop` simply stops emmiting any value.
 *
 * ```
 * stop(1)
 * ```
 * changes 1234567890
 * emits   ----------
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.stop = void 0;
exports.stop = function () { return function (source) { return function (_) {
    return source(function (value) {
        // nothin'
    });
}; }; };
//# sourceMappingURL=stop.js.map