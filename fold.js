/*
 * `fold` accumulates the received values. Also known as `reduce` or `inject`
 * elsewhere. It gets a second parameter that represents the initial value to
 * be accumulated.
 *
 * ```
 * fold(add, 0)
 * ```
 * changes 110120211
 * emits   122355789
 *
 */

import curryN from 'ramda/src/curryN'

export default curryN(4, (step, initial, eventSource, next) => {
  let accumulated = initial
  return eventSource((value) => next(accumulated = step(accumulated, value)))
})
