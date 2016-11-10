/* globals cancelAnimationFrame requestAnimationFrame */
const fromAnimationFrame = () => {
  let id = null

  const signal = (next) => {
    const frame = () => {
      id = requestAnimationFrame(frame)
      next()
    }
    frame()
  }

  signal.stop = () => {
    cancelAnimationFrame(id)
  }

  return signal
}

export default fromAnimationFrame
