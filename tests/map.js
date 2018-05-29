const { logger, test: t, validator: v } = require('../utils/helpers');

const {
    totalBerries = 0,
    totalBerriesWeight = 0,
    timeToEatSimple = 0,
    timeToEat = null,
} = require('../exercises/eating-fruit');

console.log('\n\n\n >>>>>> 🏁  Start tests.\n\n');

const testTotalBerries = t(
    '\n      ✅  Great! Your basket is full of berries 🍓  📦',
    v('\n         🛑  Oops! NaN seems like a bug... 🐛', x => !Number.isNaN(x)),
    v('\n         🛑  Oops! Did you count your strawberries 🍓 right? You have more than 14 in your basket 📦', x => 15 > x),
    v('\n         🛑  Oops! Did you count your strawberries 🍓 right? You have less than 14 in your basket 📦', x => 13 < x)
);
testTotalBerries(totalBerries);

const testTotalBerriesWeight = t(
    '\n      ✅  Great! Your math was right 🍓  📦',
    v('\n         🛑  Oops! NaN seems like a bug... 🐛', x => !Number.isNaN(x)),
    v('\n         🛑  Oops! Did you do your math right? The weight is more than 22 🍓', x => 23 > x),
    v('\n         🛑  Oops! Did you do your math right? The weight is less than 22 🍓', x => 21 < x)
);
testTotalBerriesWeight(totalBerriesWeight);

const testTimeToEatSimple = t(
    '\n      ✅  Great! You ate all of the berries 🍓 ... 🐛 ... yum!',
    v('\n         🛑  Oops! NaN seems like a bug... 🐛', x => !Number.isNaN(x)),
    v('\n         🛑  Oops! Slow down bug 🍓 ... 🐛  You are bit too fast!', x => 12 > x),
    v('\n         🛑  Oops! Hurry up! 🍓 ... 🐛  You are bit too slow!', x => 10 < x)
);
testTimeToEatSimple(timeToEatSimple);

const testTimeToEat = t(
    '\n      ✅  Great! You ate all of the berries 🍓 ... 🐛 ... yum!',
    v('\n         🛑  Oops! NaN seems like a bug... 🐛', x => !Number.isNaN(x)),
    v('\n         🛑  Oops! Slow down bug 🍓 ... 🐛  You are bit too fast!', x => 16 > x),
    v('\n         🛑  Oops! Hurry up! 🍓 ... 🐛  You are bit too slow!', x => 14 < x)
);
testTimeToEat(timeToEat);

console.log('\n\n\n >>>>>> 🏁  All tests run. Check results.\n\n\n');
