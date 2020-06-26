"use strict";
/**
 * Observable
 *
 * Here we're oversimplifying Observable a lot. After all, zen-signals goal is to learn,
 * not to be production ready. For examples of the actual needed complexity, check RxJS's
 * codebase, particularly https://github.com/ReactiveX/rxjs/blob/master/src/internal/Observable.ts
 *
 * In this example we're event omitting 2 very important aspects of any minimally decent
 * observable, a way to stop it and dealing with errors.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = void 0;
exports.observable = function () { return function (next) {
    return function (value) { return next(value); };
}; };
//# sourceMappingURL=Observable.js.map