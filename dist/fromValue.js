"use strict";
/**
 * fromValue
 *
 * type: Stream creator
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromValue = void 0;
exports.fromValue = function (value) { return function (next) {
    next(value);
    return function (value) { return next(value); };
}; };
//# sourceMappingURL=fromValue.js.map