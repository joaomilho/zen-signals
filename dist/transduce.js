"use strict";
/*
 * transduce
 *
 * `transduce` gets the current value in the process and applies a
 * transformation to it. This transformation must conform to the
 * transducer protocol https://github.com/cognitect-labs/transducers-js#the-transducer-protocol
 *
 * There's a not of FUD about transducers online, but the main advantage
 * of using them in zen-signals (we'll, of understanding them in zen-signals)
 * is that you can use a transducer in any compatible library. For instance,
 * the transducer below will work in regular arrays, in zen-signals, in most
 * https://github.com/cujojs/most/blob/master/docs/api.md#transduce and elsewhere.
 *
 * ```
 * import t from 'transducers-js'
 *
 * const transducer = t.comp(
 *   t.take(4),
 *	 t.filter(x => x % 2 === 0),
 *   t.map(x => x + 1)
 * )
 *
 * transduce(transducer)
 * ```
 *
 * changes 12345678
 * emits   -3-5----
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.transduce = void 0;
exports.transduce = function (transducer) { return function (next) { return function (value) {
    var result = transducer([value])[0];
    typeof result !== "undefined" && next(result);
}; }; };
//# sourceMappingURL=transduce.js.map