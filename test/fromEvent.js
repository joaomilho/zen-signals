import test from 'tape'
import fromEvent from '../fromEvent'
import { spy } from 'sinon'

test('fromEvent', (assert) => {
  const addEventListener = spy()
  const removeEventListener = spy()
  const node = { addEventListener, removeEventListener }
  const signal = fromEvent(node, 'click', false)

  const empty = () => {}
  signal(empty)

  assert.ok(addEventListener.calledWith('click', empty, false), 'add event listener to element')

  signal.stop()
  assert.ok(removeEventListener.calledWith('click', empty, false), 'remove event listener from element')

  assert.end()
})
