import { fromValue } from "./fromValue";

test("fromValue", () => {
  const listener = jest.fn();

  fromValue(1)(listener);

  expect(listener).toHaveBeenCalledWith(1);
});
