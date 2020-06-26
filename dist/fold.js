"use strict";
/**
 * Fold
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fold = void 0;
exports.fold = function (step, initial) { return function (source) { return function (next) {
    var acc = initial;
    return source(function (value) { return next((acc = step(acc, value))); });
}; }; };
//# sourceMappingURL=fold.js.map