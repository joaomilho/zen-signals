"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
test("distinct", function () {
    var listener = jest.fn();
    _1.distinct(_1.fromValues([1, 2, 2, 3, 3, 3]))(listener);
    expect(listener).toHaveBeenCalledTimes(3);
    expect(listener).toHaveBeenCalledWith(1);
    expect(listener).toHaveBeenCalledWith(2);
    expect(listener).toHaveBeenCalledWith(3);
});
//# sourceMappingURL=distinct.spec.js.map