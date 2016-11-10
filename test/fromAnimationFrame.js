import test from 'tape'
import fromAnimationFrame from '../fromAnimationFrame'
import { spy, stub } from 'sinon'

test('fromAnimationFrame', (assert) => {
  global.requestAnimationFrame = stub().returns(12345)
  global.cancelAnimationFrame = spy()

  const signal = fromAnimationFrame()

  const empty = () => {}
  signal(empty)

  const frame = requestAnimationFrame.getCall(0).args[0]

  assert.equal('function', typeof frame)
  assert.equal(1, requestAnimationFrame.callCount)
  frame()
  assert.equal(2, requestAnimationFrame.callCount)

  signal.stop()
  assert.equal(12345, cancelAnimationFrame.getCall(0).args[0])

  assert.end()
})
