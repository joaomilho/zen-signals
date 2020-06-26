"use strict";
/**
 * mergeAll
 *
 * type: Stream operation
 *
 * `mergeAll` combines any number of sources as if they were one. It doesn't
 * change values in any way.
 *
 * ```
 * mergeAll([sourceA, sourceB, sourceC])
 * ```
 * sourceA o---o---o--o----o
 * sourceB --x----x-x---x---
 * sourceC -א-------------א-
 * emits   oאx-o--xox-o-x-אo
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeAll = void 0;
exports.mergeAll = function (sources) { return function (next) { return sources.forEach(function (source) { return source(next); }); }; };
//# sourceMappingURL=mergeAll.js.map