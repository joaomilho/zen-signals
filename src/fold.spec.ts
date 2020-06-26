import { fromValues, fold } from "./";

test("fold", () => {
  const listener = jest.fn();

  fold((x: number, y: number) => x + y, 5)(fromValues([1, 2, 3]))(listener);

  expect(listener).toHaveBeenCalledWith(11);
});
