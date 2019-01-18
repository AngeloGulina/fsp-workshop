import { logger, test, validator } from '../utils/helpers';

import {
    totalBerries,
    totalBerriesWeight,
    timeToEatSimple,
    timeToEat,
} from '../exercises/eating-fruit';

console.log('\n\n\n >>>>>> 🏁  Start tests.\n\n');

const testTotalBerries = test(
    '\n      ✅  Great! Your basket is full of berries 🍓  📦',
    validator('\n         🛑  Oops! NaN seems like a bug... 🐛', (x: number) => !Number.isNaN(x)),
    validator('\n         🛑  Oops! Did you count your strawberries 🍓 right? You have more than 14 in your basket 📦', x => 15 > x),
    validator('\n         🛑  Oops! Did you count your strawberries 🍓 right? You have less than 14 in your basket 📦', x => 13 < x)
);

const testTotalBerriesWeight = test(
    '\n      ✅  Great! Your math was right 🍓  📦',
    validator('\n         🛑  Oops! NaN seems like a bug... 🐛', (x: number) => !Number.isNaN(x)),
    validator('\n         🛑  Oops! Did you do your math right? The weight is more than 22 🍓', x => 23 > x),
    validator('\n         🛑  Oops! Did you do your math right? The weight is less than 22 🍓', x => 21 < x)
);

const testTimeToEatSimple = test(
    '\n      ✅  Great! You ate all of the berries 🍓 ... 🐛 ... yum!',
    validator('\n         🛑  Oops! NaN seems like a bug... 🐛', (x: number) => !Number.isNaN(x)),
    validator('\n         🛑  Oops! Slow down bug 🍓 ... 🐛  You are bit too fast!', x => 12 > x),
    validator('\n         🛑  Oops! Hurry up! 🍓 ... 🐛  You are bit too slow!', x => 10 < x)
);

const testTimeToEat = test(
    '\n      ✅  Great! You ate all of the berries 🍓 ... 🐛 ... yum!',
    validator('\n         🛑  Oops! NaN seems like a bug... 🐛', (x: number) => !Number.isNaN(x)),
    validator('\n         🛑  Oops! Slow down bug 🍓 ... 🐛  You are bit too fast!', x => 16 > x),
    validator('\n         🛑  Oops! Hurry up! 🍓 ... 🐛  You are bit too slow!', x => 14 < x)
);

console.log('\n\n\n >>>>>> 🏁  All tests run. Check results.\n\n\n');

export default () => {
    testTotalBerries(totalBerries);
    testTotalBerriesWeight(totalBerriesWeight);
    testTimeToEatSimple(timeToEatSimple);
    testTimeToEat(timeToEat);
};
