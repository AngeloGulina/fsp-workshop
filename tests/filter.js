const { logger, test: t, validator: v } = require('../utils/helpers');
const { equal } = require('../utils/fx')

const {
    onlyGreenApples = [],
    onlyRedApples = [],
    onlyYellowLemons = [],
    onlyApples = [],
    onlyLemons = [],
    onlyHeavyFruits = [],
    onlyHeavyApples = [],
    onlyHeavyRedApples = [],
    onlyLightApples = [],
    onlyLightGreenApples = [],
} = require('../exercises/type-of-fruit');


console.log('\n\n\n >>>>>> 🏁  Start tests.\n\n');

const testRedApples = t(
    '\n      ✅  Great! You found all of the Red Apples 🍎',
    v('\n         🛑  Oops! A bug is eating Red Apples... 🍎 ... 🐛', equal(5))
);
testRedApples(onlyRedApples.length);

const testGreenApples = t(
    '\n      ✅  Great! You found all of the Green Apples 🍏',
    v('\n         🛑  Oops! A bug is eating your Green App... 🍏 ... 🐛', equal(3))
);
testGreenApples(onlyGreenApples.length);

const testYellowLemons = t(
    '\n      ✅  Great! You found all of the Yellow Lemons 🍋',
    v('\n         🛑  Oops! A bug is eating your Yellow lem... 🍋 ... 🐛', equal(4))
);
testYellowLemons(onlyYellowLemons.length);

const testOnlyApples = t(
    '\n      ✅  Great! You found all of the Apples 🍎',
    v('\n         🛑  Oops! A bug is eating all of your app... 🍎 ... ', equal(8))
);
testOnlyApples(onlyApples.length);

const testOnlyLemons = t(
    '\n      ✅  Great! You found all of the Lemons 🍋',
    v('\n         🛑  Oops! A bug is eating all of your lem... 🍋 ... ', equal(8))
);
testOnlyLemons(onlyLemons.length);

const testHeavyFruits = t(
    '\n      ✅  Great! You found all of the heavy fruits 🍎 , 🍋',
    v('\n         🛑  Oops! A bug is eating your heavy fru... 🍎 , 🍋 ... 🐛', equal(7))
);
testHeavyFruits(onlyHeavyFruits.length);

const testHeavyApples = t(
    '\n      ✅  Great! You found all of the Big Apples 🍏',
    v('\n         🛑  Oops! A bug is eating your big app... 🍏 ... 🐛', equal(3))
);
testHeavyApples(onlyHeavyApples.length);

const testHeavyRedApples = t(
    '\n      ✅  Great! You found all of the Big Red Apples 🍎',
    v('\n         🛑  Oops! A bug is eating your big red app... 🍎 ... 🐛', equal(2))
);
testHeavyRedApples(onlyHeavyRedApples.length);

const testLightApples = t(
    '\n      ✅  Great! You found all of the Light Apples 🍏',
    v('\n         🛑  Oops! A bug is eating your light app... 🍏 ... 🐛', equal(5))
);
testLightApples(onlyLightApples.length);

const testLightGreenApples = t(
    '\n      ✅  Great! You found all of the Light Green Apples 🍏',
    v('\n         🛑  Oops! A bug is eating your light green app... 🍏 ... 🐛', equal(2))
);
testLightGreenApples(onlyLightGreenApples.length);

console.log('\n\n\n >>>>>> 🏁  All tests run. Check results.\n\n\n');
