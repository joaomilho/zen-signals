"use strict";
/**
 * filter
 *
 * type: Stream value transformation
 *
 * `filter` gets the current value in the process and pass it along if a given
 * condition (aka predicate) is satisfied.
 *
 * ```
 * filter(x => x === 5)
 * ```
 * changes 1234565432123456
 * emits   ----5-5-------5-
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
exports.filter = function (predicate) { return function (source) { return function (next) {
    return source(function (value) {
        if (predicate(value))
            next(value);
    });
}; }; };
//# sourceMappingURL=filter.js.map