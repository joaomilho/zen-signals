import test from 'tape'
import id from '../id'
import { spy } from 'sinon'

test('id', (assert) => {
  const signal = spy()
  const next = spy()
  id()(signal)(next)

  const handler = signal.getCall(0).args[0]

  handler(1)
  assert.ok(next.calledWith(1))
  handler(2)
  assert.ok(next.calledWith(2))

  assert.end()
})
