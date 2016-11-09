import map from '../map'
import signal from '../signal'

const send = map(v => v + 1, signal(1), console.log)

send(10)

