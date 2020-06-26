"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fromEvent_1 = require("./fromEvent");
test("fromEvent", function () {
    var listener = jest.fn();
    var domObject = {
        addEventListener: jest.fn(),
        removeEventListener: function () { },
        dispatchEvent: function () { return true; },
    };
    fromEvent_1.fromEvent(domObject, "event")(listener);
    expect(domObject.addEventListener).toHaveBeenCalledWith("event", listener, false);
});
//# sourceMappingURL=fromEvent.spec.js.map