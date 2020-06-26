import * as zen from "./";

test("exports", () => {
  expect(zen).toEqual({
    always: expect.any(Function),
    apply: expect.any(Function),
    distinct: expect.any(Function),
    filter: expect.any(Function),
    fold: expect.any(Function),
    fromAnimationFrame: expect.any(Function),
    fromEvent: expect.any(Function),
    fromValue: expect.any(Function),
    fromValues: expect.any(Function),
    id: expect.any(Function),
    map: expect.any(Function),
    merge: expect.any(Function),
    mergeAll: expect.any(Function),
    on: expect.any(Function),
    reject: expect.any(Function),
    stop: expect.any(Function),
    takeAfter: expect.any(Function),
    takeBetween: expect.any(Function),
    takeUntil: expect.any(Function),
  });
});
