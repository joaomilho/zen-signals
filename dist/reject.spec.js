"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
test("filter", function () {
    var listener = jest.fn();
    _1.reject(function (x) { return x === 5; })(_1.fromValues([0, 5, 0, 5]))(listener);
    expect(listener).toHaveBeenCalledTimes(2);
    expect(listener).toHaveBeenCalledWith(0);
    expect(listener).not.toHaveBeenCalledWith(5);
});
//# sourceMappingURL=reject.spec.js.map