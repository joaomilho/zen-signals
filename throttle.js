/*
 * `throttle` buffers emitting the value for a given amount of time, in
 * milliseconds.
 *
 * throttle 3000 (assuming each change happens in 1s)
 * changes 123456789012345678---
 * emits   1---5---9---3---7---8
 *
 */

import curry from 'ramda/src/curry'

let last, timer
export default curry((ms, eventSource, next) => {
  return eventSource((value) => {
    clearTimeout(timer)

    timer = setTimeout(() => next(value), ms)
  })
})
