/**
 * always
 *
 * type: Stream value transformation
 *
 * `always` emits a single constant value for every value it receives. It's also known as
 * `const` in the functional world.
 *
 * ```
 * always(1)
 * ```
 * changes 1234567890
 * emits   1111111111
 *
 */

import { Observable } from "./Observable";

export const always = (value: any) => (source: Observable) => (
  next: Function
) => source(() => next(value));
