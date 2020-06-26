import { stop, fromValue } from "./";

test("stop", () => {
  const listener = jest.fn();

  stop()(fromValue(1))(listener);

  expect(listener).not.toHaveBeenCalled();
});
