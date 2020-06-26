import { fromValue, mergeAll } from "./";

test("mergeAll", () => {
  const listener = jest.fn();

  mergeAll([fromValue(1), fromValue(2)])(listener);

  expect(listener).toHaveBeenCalledWith(1);
  expect(listener).toHaveBeenCalledWith(2);
});
