"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fromValue_1 = require("./fromValue");
test("fromValue", function () {
    var listener = jest.fn();
    fromValue_1.fromValue(1)(listener);
    expect(listener).toHaveBeenCalledWith(1);
});
//# sourceMappingURL=fromValue.spec.js.map