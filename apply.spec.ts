import { apply, map, fromValue } from "./";

test("apply", () => {
  const listener = jest.fn();

  apply(
    fromValue(1),
    map((x: number) => x + 1)
  )(listener);

  expect(listener).toHaveBeenCalledWith(2);
});
