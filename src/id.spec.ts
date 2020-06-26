import { id, fromValue } from "./";

test("id", () => {
  const listener = jest.fn();

  id()(fromValue(1))(listener);

  expect(listener).toHaveBeenCalledWith(1);
});
