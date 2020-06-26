import { fromValue, map, on } from "./";

test("on", () => {
  const listener = jest.fn();

  on(
    fromValue(1),
    map((x: number) => x + 1),
    listener
  );

  expect(listener).toHaveBeenCalledWith(2);
});
