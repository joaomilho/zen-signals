import test from 'tape'
import signal from '../signal'
import { spy } from 'sinon'

test('signal without initial value', (assert) => {
  const ping = signal()

  assert.equal('ping', ping('ping'))
  assert.equal('pong', ping('pong'))

  assert.end()
})

test('signal with initial value', (assert) => {
  const next = spy()
  const ping = signal('ping')

  ping(next)
  assert.equal('ping', next.getCall(0).args[0])

  assert.end()
})
