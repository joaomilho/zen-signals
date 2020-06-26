"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
test("merge", function () {
    var listener = jest.fn();
    _1.merge(_1.fromValue(1), _1.fromValue(2))(listener);
    expect(listener).toHaveBeenCalledWith(1);
    expect(listener).toHaveBeenCalledWith(2);
});
//# sourceMappingURL=merge.spec.js.map