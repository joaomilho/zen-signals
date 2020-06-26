import { fromValue, merge } from "./";

test("merge", () => {
  const listener = jest.fn();

  merge(fromValue(1), fromValue(2))(listener);

  expect(listener).toHaveBeenCalledWith(1);
  expect(listener).toHaveBeenCalledWith(2);
});
