"use strict";
/*
 * before
 *
 * type: Stream operation
 *
 * `before` gets the current value in a process and pass it
 * before another process emits a value
 *
 * ```
 * before(sourceStop, source)
 * ```
 * sourceStop --------x--------
 * source     o---o------o----o
 * emits      o---o------------
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.before = void 0;
exports.before = function (sourceStop, source) { return function (next) {
    var stop = false;
    sourceStop(function () { return (stop = true); });
    source(function (value) {
        if (!stop)
            next(value);
    });
}; };
//# sourceMappingURL=before.js.map