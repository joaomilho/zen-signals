/*
 * throttle
 *
 * type: Stream value transformation
 *
 * `throttle` buffers emitting the value for a given amount of time, in
 * milliseconds.
 *
 * ```
 * throttle(3000) // assuming each change happens in 1s
 * ```
 * changes 123456789012345678---
 * emits   1---5---9---3---7---8
 *
 */

import { Observable } from "./Observable";

// this way it works both in node and browser
let timer: ReturnType<typeof setTimeout>;

export default (ms: number) => (source: Observable) => (next: Function) => {
  return source((value: any) => {
    clearTimeout(timer);

    timer = setTimeout(() => next(value), ms);
  });
};
