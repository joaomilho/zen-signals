/**
 * fromEvent
 *
 * type: Stream creator
 */

import { Observable } from "./Observable";

export const fromEvent = (
  node: EventTarget,
  event: string,
  useCapture: boolean = false
): Observable => {
  let listenerRef: Function | null = null;

  return function (next: Function) {
    listenerRef = next;

    node.addEventListener(event, next as EventListener, useCapture);
  };
};
