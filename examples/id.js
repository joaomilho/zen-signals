import {signal, id} from '..'

id(signal(10), console.log) // will immediatelly log 10
