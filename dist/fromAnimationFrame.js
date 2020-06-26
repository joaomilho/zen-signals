"use strict";
/**
 * fromAnimationFrame
 *
 * type: Stream creator
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromAnimationFrame = void 0;
exports.fromAnimationFrame = function () {
    var id = null;
    return function (next) {
        var frame = function () {
            id = requestAnimationFrame(frame);
            next();
        };
        frame();
    };
    //   signal.stop = () => {
    //     cancelAnimationFrame(id)
    //   }
};
//# sourceMappingURL=fromAnimationFrame.js.map