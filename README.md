<center>
![](https://infiniteshift.files.wordpress.com/2013/05/vesica-piscis.jpg)
<h1>zen-signals</h1>
<h4>The simplest signal library possible</h4>
</center>
<br />

zen-signals is a signal library focused on readability. You should be able to open the code and understand it. Therefore, it's main value is didactic. Yes, you can use it in your project, and maybe even in production, but it will fall short for more complex use cases.

<hr />

##### hello world

```js
import {signal, id} from 'zen-signals'

id(signal(10), console.log) // will immediatelly log 10
```

##### map

```js
import {signal, map} from 'zen-signals'

map((x) => x + 1, signal(10), console.log) // will immediatelly log 11
```

##### filter

```js
import {signal, filter} from 'zen-signals'

filter((x) => x > 20, signal(10), console.log)
```