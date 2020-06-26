import { fromValues } from "./fromValues";

test("fromValue", () => {
  const listener = jest.fn();

  fromValues([1, 2, 3])(listener);

  expect(listener).toHaveBeenCalledTimes(3);

  expect(listener).toHaveBeenCalledWith(1);
  expect(listener).toHaveBeenCalledWith(2);
  expect(listener).toHaveBeenCalledWith(3);
});
