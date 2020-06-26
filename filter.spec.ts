import { fromValues, filter } from "./";

test("filter", () => {
  const listener = jest.fn();

  filter((x) => x === 5)(fromValues([0, 5, 0, 5]))(listener);

  expect(listener).toHaveBeenCalledTimes(2);

  expect(listener).toHaveBeenCalledWith(5);
  expect(listener).not.toHaveBeenCalledWith(0);
});
