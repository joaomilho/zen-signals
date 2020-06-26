"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fromValues_1 = require("./fromValues");
test("fromValue", function () {
    var listener = jest.fn();
    fromValues_1.fromValues([1, 2, 3])(listener);
    expect(listener).toHaveBeenCalledTimes(3);
    expect(listener).toHaveBeenCalledWith(1);
    expect(listener).toHaveBeenCalledWith(2);
    expect(listener).toHaveBeenCalledWith(3);
});
//# sourceMappingURL=fromValues.spec.js.map