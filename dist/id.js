"use strict";
/**
 * id
 *
 * type: Stream value transformation
 *
 * `id` simply passes along the value received. Analog to `id` in Haskell
 * and other languages.
 *
 * ```
 * id
 * ```
 * changes 1234567890
 * emits   1234567890
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.id = void 0;
exports.id = function () { return function (source) { return function (next) {
    return source(function (value) { return next(value); });
}; }; };
//# sourceMappingURL=id.js.map