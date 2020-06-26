import { fromValues, distinct } from "./";

test("distinct", () => {
  const listener = jest.fn();

  distinct(fromValues([1, 2, 2, 3, 3, 3]))(listener);

  expect(listener).toHaveBeenCalledTimes(3);

  expect(listener).toHaveBeenCalledWith(1);
  expect(listener).toHaveBeenCalledWith(2);
  expect(listener).toHaveBeenCalledWith(3);
});
