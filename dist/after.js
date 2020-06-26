"use strict";
/*
 * after
 *
 * type: Stream operation
 *
 * `after` gets the current value in a process and pass it
 * only after another process emits a value
 *
 * ```
 * after(sourceStart, source)
 * ```
 * sourceStart --------x--------
 * source      o---o------o----o
 * emits       -----------o----o
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.after = void 0;
exports.after = function (sourceStart, source) { return function (next) {
    var start = false;
    sourceStart(function () { return (start = true); });
    source(function (value) {
        if (start)
            next(value);
    });
}; };
//# sourceMappingURL=after.js.map