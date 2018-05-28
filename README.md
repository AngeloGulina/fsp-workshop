# fsp-workshop
> 🗒 Excercises for Functional Programming Style

## Requirement
The only requirement for this to run is to have Node.js > 8

## Running the exercises
To run the exercises just type

```sh
node index.js
```

In order not to confuse with results, only the basic exercise is run. It refers to `type-of-fruit.js`.

### An example on how to solve the excercises

Go to `type-of-fruit.js`.

Every exercise has a set of data prepared for you. You will need to inspect to pass the challenge.
(It'll be bit like childood math, something along the lines of: _Lucy has a basket of candies. How many blue candies are there?_)

So, the file starts witht the data:
```javascript
const {
    applesList,
    fruitsList,
} = require('./res/fruitsLists');
```

Below, you will see some variables declared (default to `undefined`) and then exported. They will be used to check the results.
```javascript
let onlyRedApples;
let onlyGreenApples;

// ...

module.exports = {
    onlyGreenApples,
    onlyRedApples,
    // ...
};
```

In order to solve the challenge, you will need to set those variables to the correct answer, staritng from the given data.
It's up to you how you get to the result.

Of course, the aim of this is to prove a _Functional Programming Style_ more useful and ergonomic.
It can also be used to practice a bit.

Have fun 🙌

## Supporting

I believe in Unicorns 🦄
Support [me](http://www.paypal.me/angelogulina/2), if you do the same.

## License

[MIT License](LICENSE)

Copyright (c) 2018 A (from Sicily)
