const fromEvent = (node, event, useCapture) => {
  let _next = null

  const signal = (next) => {
    _next = next
    node.addEventListener(event, next, !!useCapture)
  }

  signal.stop = () => {
    node.removeEventListener(event, _next, !!useCapture)
  }

  return signal
}

export default fromEvent
