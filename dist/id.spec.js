"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
test("id", function () {
    var listener = jest.fn();
    _1.id()(_1.fromValue(1))(listener);
    expect(listener).toHaveBeenCalledWith(1);
});
//# sourceMappingURL=id.spec.js.map