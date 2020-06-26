import { always, fromValue } from "./";

test("always", () => {
  const listener = jest.fn();

  always(42)(fromValue(1))(listener);

  expect(listener).toHaveBeenCalledWith(42);
});
