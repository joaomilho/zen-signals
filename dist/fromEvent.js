"use strict";
/**
 * fromEvent
 *
 * type: Stream creator
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromEvent = void 0;
exports.fromEvent = function (node, event, useCapture) {
    if (useCapture === void 0) { useCapture = false; }
    var listenerRef = null;
    return function (next) {
        listenerRef = next;
        node.addEventListener(event, next, useCapture);
    };
};
//# sourceMappingURL=fromEvent.js.map