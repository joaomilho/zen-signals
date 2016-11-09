import fold from '../fold'
import signal from '../signal'
import add from 'ramda/src/add'
const send = fold(add, 0, signal(), console.log)

send(1) // 1
send(2) // 3
send(3) // 6
send(4) // 10
send(5) // 15
