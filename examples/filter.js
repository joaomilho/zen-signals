import filter from '../filter'
import signal from '../signal'

const send = filter((x) => x > 10, signal(), console.log)

send(1) 
send(12) // 12
send(3)  
send(14) // 14
send(5) 
