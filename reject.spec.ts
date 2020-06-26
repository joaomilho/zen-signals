import { fromValues, reject } from "./";

test("filter", () => {
  const listener = jest.fn();

  reject((x) => x === 5)(fromValues([0, 5, 0, 5]))(listener);

  expect(listener).toHaveBeenCalledTimes(2);

  expect(listener).toHaveBeenCalledWith(0);
  expect(listener).not.toHaveBeenCalledWith(5);
});
