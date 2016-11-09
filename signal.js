const signal = (v) =>
  v
    ? (next) => {
        next(v)
        return (v) => next(v)
      }
    : (v) => v


export default signal
