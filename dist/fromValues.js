"use strict";
/**
 * fromValues
 *
 * type: Stream creator
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromValues = void 0;
exports.fromValues = function (values) {
    if (values === void 0) { values = []; }
    return function (next) {
        values.map(function (value) { return next(value); });
        return function (value) { return next(value); };
    };
};
//# sourceMappingURL=fromValues.js.map