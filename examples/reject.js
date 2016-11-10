import reject from '../reject'
import signal from '../signal'

const send = reject((x) => x > 10, signal(), console.log)

send(1)  // 1
send(12) 
send(3)  // 3
send(14) 
send(5)  // 5 
