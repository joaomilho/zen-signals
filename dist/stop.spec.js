"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
test("stop", function () {
    var listener = jest.fn();
    _1.stop()(_1.fromValue(1))(listener);
    expect(listener).not.toHaveBeenCalled();
});
//# sourceMappingURL=stop.spec.js.map