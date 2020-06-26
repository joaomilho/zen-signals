"use strict";
/*
 * between
 *
 * type: Stream operation
 *
 * `between` gets the current value in a process and pass it
 * if and only if it was emitted between two consecutive values
 * of another process, which acts like a switch
 *
 * Its usage is similar to `merge`:
 *
 *
 * ```
 * between(sourceSwitch, sourceOfValues)
 * ```
 * sourceSwitch   --x--x----x----x-
 * sourceOfValues o--o---o---o-o--o
 * emits          ---o-------o-o---
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.between = void 0;
exports.between = function (sourceSwitch, source) { return function (next) {
    var on = false;
    sourceSwitch(function () { return (on = !on); });
    source(function (value) {
        if (on)
            next(value);
    });
}; };
//# sourceMappingURL=between.js.map