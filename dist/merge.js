"use strict";
/**
 * merge
 *
 * type: Stream operation
 *
 * `merge` combines 2 sources as if they were one. It doesn't change values
 * in any way.
 *
 * ```
 * merge(sourceA, sourceB)
 * ```
 * sourceA o---o---o--o----o
 * sourceB --x----x-x---x---
 * emits   o-x-o--xox-o-x--o
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
exports.merge = function (sourceA, sourceB) { return function (next) { return [sourceA, sourceB].forEach(function (source) { return source(next); }); }; };
//# sourceMappingURL=merge.js.map