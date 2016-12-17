const on = (source, process, sideEffect) =>
  process(source)(sideEffect)

export default on
