"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var zen = __importStar(require("./"));
var fn = expect.any(Function);
test("exports", function () {
    expect(zen).toEqual({
        after: fn,
        always: fn,
        apply: fn,
        before: fn,
        between: fn,
        distinct: fn,
        filter: fn,
        fold: fn,
        fromAnimationFrame: fn,
        fromEvent: fn,
        fromValue: fn,
        fromValues: fn,
        id: fn,
        map: fn,
        merge: fn,
        mergeAll: fn,
        observable: fn,
        on: fn,
        reject: fn,
        stop: fn,
    });
});
//# sourceMappingURL=index.spec.js.map