/*
 * after
 *
 * type: Stream operation
 *
 * `after` gets the current value in a process and pass it
 * only after another process emits a value
 *
 * ```
 * after(sourceStart, source)
 * ```
 * sourceStart --------x--------
 * source      o---o------o----o
 * emits       -----------o----o
 *
 */

import { Observable } from "./Observable";

export const after = (sourceStart: Observable, source: Observable) => (
  next: Function
) => {
  let start = false;

  sourceStart(() => (start = true));

  source((value: any) => {
    if (start) next(value);
  });
};
