"use strict";
/**
 * reject
 *
 * type: Stream value transformation
 *
 * `reject` is the opposite of `filter`, passing the received value only if the
 * condition is _not_ satisfied.
 *
 * ```
 * reject(x => x === 5)
 * ```
 * changes 1234565432123456
 * emits   1234-6-4321234-6
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.reject = void 0;
exports.reject = function (predicate) { return function (source) { return function (next) {
    return source(function (value) {
        if (!predicate(value))
            next(value);
    });
}; }; };
//# sourceMappingURL=reject.js.map