import { fromEvent } from "./fromEvent";

test("fromEvent", () => {
  const listener = jest.fn();
  const domObject = {
    addEventListener: jest.fn(),
    removeEventListener: () => {},
    dispatchEvent: () => true,
  };

  fromEvent(domObject, "event")(listener);

  expect(domObject.addEventListener).toHaveBeenCalledWith(
    "event",
    listener,
    false
  );
});
