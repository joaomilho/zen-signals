"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
test("fold", function () {
    var listener = jest.fn();
    _1.fold(function (x, y) { return x + y; }, 5)(_1.fromValues([1, 2, 3]))(listener);
    expect(listener).toHaveBeenCalledWith(11);
});
//# sourceMappingURL=fold.spec.js.map