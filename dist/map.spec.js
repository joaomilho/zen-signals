"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
test("map", function () {
    var listener = jest.fn();
    _1.map(function (x) { return x + 1; })(_1.fromValue(1))(listener);
    expect(listener).toHaveBeenCalledWith(2);
});
//# sourceMappingURL=map.spec.js.map