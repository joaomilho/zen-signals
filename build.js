import curryN from './curryN'

export default curryN(4, (builder, handler, eventSource, next) =>
  eventSource((value) => builder(handler, next, value))
)
