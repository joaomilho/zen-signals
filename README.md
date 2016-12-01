<center>
![](https://infiniteshift.files.wordpress.com/2013/05/vesica-piscis.jpg)
<h1>zen-signals</h1>
<h4>The simplest signal library possible</h4>
</center>
<br />

zen-signals is a signal library focused on readability. You should be able to open the code and understand it. Therefore, its main value is educational. Yes, you can use it in your project, and maybe even in production, but it will fall short for more complex use cases. If you're learning Rx (or any other production ready signal library), you may find understanding and reading zen-signal's code helpful.

<hr />

##### The "necessary" verbiage part

To understand zen-signals, you need to understand 3 things: signals, processes and side effects. As names suggest, a signal is a place where data comes from; a process is something that changes data - and only data; and a side effect is something that changes other things than data.

You'll discover that each signal library out there use sligthly different terms for these 3 components and this is a major source of confusion when learning them. The important thing here is to understand these 3 roles, after all it is not that hard, and then you can also call them however you like. If you like straightforward language, which appears not to be fashionable nowadays, you may wanna call these "the shit that happens", "the shit that gives me what I care about" and "the shit that changes shit". Suit yourself.

There are many cool things about using a signal library. Depending on who you ask people will give you a different perspective on why it is cool. This is another source of confusion. But the main things you'll hear about are composability, testability and isolation of side effects. People may talk about these things using other terms like expressiveness, purity, reasoning, etc... These are just jargon that eventually boils down to the relevant stuff.

Composability gives you a lot of power in a very expressive way. Being expressive makes reasoning easier, because you can state complex things in simpler terms. You'll see that, most of the time, the things you'll be composing are the processes.

Now, everyone is saying – in public – that these pesky called side effects should be avoided at all costs – while in private they may be doing lavish side effect banquets. But they actually have a point: side effects are where things generally go wrong. And we don't want things to go wrong, don't we? That's because side effects change things out of our control, so they may have unpredictable results. Therefore, clearly separating our processes from our side effects makes testing the processes a breeze, leaving the side effects very clearly defined, so we can build a strong fortification around them – to make them less unpredictable – and see clearly what to blame when shit hits the fan.

<hr />

##### A classic example

To understand all that verbiage, let's consider a classic example: search. When searching we generally want to avoid doing unecessary trips to our data store. If we're talking about a web app, even worst! Blame those lazy physics who still couldn't figure out how to build these quantum computers they love to talk about and make internet requests break the speed of light!

Therefore, let's add two commandments to our search:

1. Thou shall not search before thy neighbour enters at least 3 characters. Not 4, not 5, not 2: 3 shall be thy minimal number.
2. Thou shall not search if thy neighbour is typing too fast. Hear, Israel, one second shall be the waiting time, the waiting time is one.

Now that we have our laws, given consider the following implementations. First the imperative:

<img src="https://cl.ly/1W0i0C2y372i/procedural.png" />

Now the one using `zen-signal`:

<img src="https://cl.ly/0f1t0K2D183C/functional.png" />

You're probably thinking "But wait, this is a strawman! I could have also used functions in the procedural version!". Thing is that the boundaries of these functions would not be so clearly defined, plus in the `zen-signals` version all the process that happens – defining clearly our laws – is perfectly composable. This means that, for instance, you could group them and then reuse them.

    // search.js
    const search = ({min, wait}) => pipe(
      map((event) => event.target.value),
      reject((value) => value.length < min),
      throttle(wait)
    )

    export default search

And then...

    // advancedSearch.js
    const advancedSearch = pipe(
      search({min: 3, wait: 1000}),
      // more laws here!
    )

    export default advancedSearch
    
##### hello world

```js
import {signal, id} from 'zen-signals'

id(signal(10), console.log) // will immediatelly log 10
```

### sources

[signal](signal), [fromEvent](fromEvent), [fromAnimationFrame](fromAnimationFrame)


### processes

[always](./docs/always.md), bind, distinct, filter, fold, hub, id, liftN, map, merge, reject, snapshot, stepper, stop, takeBetween, takeUntil, throttle, transduce


<a name="always"></a>
##### always

```js
import {signal, map} from 'zen-signals'

map((x) => x + 1, signal(10), console.log) // will immediatelly log 11
```

<a name="map"></a>
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