import { map, fromValue } from "./";

test("map", () => {
  const listener = jest.fn();

  map((x: number) => x + 1)(fromValue(1))(listener);

  expect(listener).toHaveBeenCalledWith(2);
});
