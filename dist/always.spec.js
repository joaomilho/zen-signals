"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
test("always", function () {
    var listener = jest.fn();
    _1.always(42)(_1.fromValue(1))(listener);
    expect(listener).toHaveBeenCalledWith(42);
});
//# sourceMappingURL=always.spec.js.map