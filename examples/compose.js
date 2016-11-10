import fold from '../fold'
import map from '../map'
import signal from '../signal'
import add from 'ramda/src/add'
import pipe from 'ramda/src/pipe'

const send = pipe(
  map(add(1)),
  fold(add, 0)
)(signal())(console.log)

send(1) // 2
send(2) // 5
send(3) // 9
send(4) // 14
send(5) // 20
