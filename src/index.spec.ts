import * as zen from "./";

const fn = expect.any(Function);

test("exports", () => {
  expect(zen).toEqual({
    after: fn,
    always: fn,
    apply: fn,
    before: fn,
    between: fn,
    distinct: fn,
    filter: fn,
    fold: fn,
    fromAnimationFrame: fn,
    fromEvent: fn,
    fromValue: fn,
    fromValues: fn,
    id: fn,
    map: fn,
    merge: fn,
    mergeAll: fn,
    observable: fn,
    on: fn,
    reject: fn,
    stop: fn,
  });
});
