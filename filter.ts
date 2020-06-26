/**
 * filter
 *
 * type: Stream value transformation
 *
 * `filter` gets the current value in the process and pass it along if a given
 * condition (aka predicate) is satisfied.
 *
 * ```
 * filter(x => x === 5)
 * ```
 * changes 1234565432123456
 * emits   ----5-5-------5-
 *
 */

import { Observable } from "./Observable";

export const filter = (predicate: (arg: any) => boolean) => (
  source: Observable
) => (next: Function) =>
  source((value: any) => {
    if (predicate(value)) next(value);
  });
