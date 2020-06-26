"use strict";
/**
 * map
 *
 * type: Stream value transformation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
exports.map = function (handler) { return function (source) { return function (next) { return source(function (value) { return next(handler(value)); }); }; }; };
//# sourceMappingURL=map.js.map