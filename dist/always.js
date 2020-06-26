"use strict";
/**
 * always
 *
 * type: Stream value transformation
 *
 * `always` emits a single constant value for every value it receives. It's also known as
 * `const` in the functional world.
 *
 * ```
 * always(1)
 * ```
 * changes 1234567890
 * emits   1111111111
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.always = void 0;
exports.always = function (value) { return function (source) { return function (next) { return source(function () { return next(value); }); }; }; };
//# sourceMappingURL=always.js.map