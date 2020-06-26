"use strict";
/*
 * distinct
 *
 * type: Stream value transformation
 *
 * `distinct` remembers the previous emited value and only emits a new one if
 * it changes.
 *
 * ```
 * distinct
 * ```
 * changes 1122234556
 * emits   1-2--345-6
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinct = void 0;
exports.distinct = function (source) { return function (next) {
    var lastValue;
    return source(function (value) {
        if (lastValue !== value) {
            next((lastValue = value));
        }
    });
}; };
//# sourceMappingURL=distinct.js.map