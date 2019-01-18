# fsp-workshop
> 🗒 Excercises for Functional Style Programming

## Requirements
The only requirement for this to run is to have Node.js > 8

## Running the exercises
To run the exercises just type

```sh
npm test
```

In order not to confuse with results, only the basic exercise is run. It refers to `type-of-fruits.ts`, which will look like:

```sh
>>>>>> 🏁  Start tests.
        🛑  Oops! A bug is eating Red Apples... 🍎 ... 🐛
        ...
        ...
```

### How to solve the exercises

All the exercises are under the `exercises` folder. Let's take `type-of-fruits.ts`.

Every exercise has a set of data prepared for you. You will need to inspect to pass the challenge.

It'll be bit like childhood math. You can think each step as if it were a question: _Alba has a basket of candies. How many blue candies are there? And so on..._

So, the file starts with the data:
```typescript
import {
    applesList,
    fruitsList,
} from '../exercises/type-of-fruits';
```

Below, you will see some variables declared (default to `undefined`) and then exported. They will be used to check the results.
```typescript
let onlyRedApples;
let onlyGreenApples;

// ...

export {
    onlyGreenApples,
    onlyRedApples,
    // ...
};
```

In order to solve the challenge, you will need to set those variables to the correct answer, starting from the given data.
It's up to you how you get to the result.

The aim of this is to prove a _Functional Programming Style_ more useful and ergonomic.

This is the reason I've provided you with some typical method used in this style to be found in `utils/fx.ts`. Be aware that those are not at all a sufficient and you will need to figure out how to use them (I've tried to add most meaningful documentation).

If you wish to have an overview of more complete libraries and helpers for that, check [ramda](https://ramdajs.com/) (it's also good for inspiration).

Have fun 🙌

## Supporting

I believe in Unicorns 🦄
Support [me](http://www.paypal.me/angelogulina/2), if you do the same.

