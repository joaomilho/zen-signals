"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
test("filter", function () {
    var listener = jest.fn();
    _1.filter(function (x) { return x === 5; })(_1.fromValues([0, 5, 0, 5]))(listener);
    expect(listener).toHaveBeenCalledTimes(2);
    expect(listener).toHaveBeenCalledWith(5);
    expect(listener).not.toHaveBeenCalledWith(0);
});
//# sourceMappingURL=filter.spec.js.map