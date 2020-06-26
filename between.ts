/*
 * between
 *
 * type: Stream operation
 *
 * `between` gets the current value in a process and pass it
 * if and only if it was emitted between two consecutive values
 * of another process, which acts like a switch
 *
 * Its usage is similar to `merge`:
 *
 *
 * ```
 * between(sourceSwitch, sourceOfValues)
 * ```
 * sourceSwitch   --x--x----x----x-
 * sourceOfValues o--o---o---o-o--o
 * emits          ---o-------o-o---
 *
 */

import { Observable } from "./Observable";

export const between = (sourceSwitch: Observable, source: Observable) => (
  next: Function
) => {
  let on = false;

  sourceSwitch(() => (on = !on));

  source((value: any) => {
    if (on) next(value);
  });
};
