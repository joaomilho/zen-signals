/*
 * distinct
 *
 * type: Stream value transformation
 *
 * `distinct` remembers the previous emited value and only emits a new one if
 * it changes.
 *
 * ```
 * distinct
 * ```
 * changes 1122234556
 * emits   1-2--345-6
 *
 */

import { Observable } from "./Observable";

export const distinct = <T>(source: Observable) => (next: Function) => {
  let lastValue: T;

  return source((value: T) => {
    if (lastValue !== value) {
      next((lastValue = value));
    }
  });
};
