/*
 * before
 *
 * type: Stream operation
 *
 * `before` gets the current value in a process and pass it
 * before another process emits a value
 *
 * ```
 * before(sourceStop, source)
 * ```
 * sourceStop --------x--------
 * source     o---o------o----o
 * emits      o---o------------
 *
 */

import { Observable } from "./Observable";

export const before = (sourceStop: Observable, source: Observable) => (
  next: Function
) => {
  let stop = false;

  sourceStop(() => (stop = true));

  source((value: any) => {
    if (!stop) next(value);
  });
};
