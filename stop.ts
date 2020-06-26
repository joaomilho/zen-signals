/*
 * stop
 *
 * type: Stream value transformation
 *
 * `stop` simply stops emmiting any value.
 *
 * ```
 * stop(1)
 * ```
 * changes 1234567890
 * emits   ----------
 *
 */

import { Observable } from "./Observable";

export const stop = () => (source: Observable) => (_: Function) =>
  source((value: any) => {
    // nothin'
  });
