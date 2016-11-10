import test from 'tape'
import snapshot from '../snapshot'
import { spy } from 'sinon'

test('snapshot', (assert) => {
  const behavior = spy()

  snapshot(behavior)
  assert.ok(behavior.called)

  assert.equal(snapshot(1), 1)

  assert.end()
})
