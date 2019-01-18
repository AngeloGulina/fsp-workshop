import { logger, test, validator } from '../utils/helpers';
import { equal } from '../utils/fx';

import {
    onlyGreenApples,
    onlyRedApples,
    onlyYellowLemons,
    onlyApples,
    onlyLemons,
    onlyHeavyFruits,
    onlyHeavyApples,
    onlyHeavyRedApples,
    onlyLightApples,
    onlyLightGreenApples,
} from '../exercises/type-of-fruits';


console.log('\n\n\n >>>>>> 🏁  Start tests.\n\n');

const testRedApples = test(
    '\n      ✅  Great! You found all of the Red Apples 🍎',
    validator('\n         🛑  Oops! A bug is eating Red Apples... 🍎 ... 🐛', equal(5))
);

const testGreenApples = test(
    '\n      ✅  Great! You found all of the Green Apples 🍏',
    validator('\n         🛑  Oops! A bug is eating your Green App... 🍏 ... 🐛', equal(3))
);

const testYellowLemons = test(
    '\n      ✅  Great! You found all of the Yellow Lemons 🍋',
    validator('\n         🛑  Oops! A bug is eating your Yellow lem... 🍋 ... 🐛', equal(4))
);

const testOnlyApples = test(
    '\n      ✅  Great! You found all of the Apples 🍎',
    validator('\n         🛑  Oops! A bug is eating all of your app... 🍎 ... ', equal(8))
);

const testOnlyLemons = test(
    '\n      ✅  Great! You found all of the Lemons 🍋',
    validator('\n         🛑  Oops! A bug is eating all of your lem... 🍋 ... ', equal(8))
);

const testHeavyFruits = test(
    '\n      ✅  Great! You found all of the heavy fruits 🍎 , 🍋',
    validator('\n         🛑  Oops! A bug is eating your heavy fru... 🍎 , 🍋 ... 🐛', equal(7))
);

const testHeavyApples = test(
    '\n      ✅  Great! You found all of the Big Apples 🍏',
    validator('\n         🛑  Oops! A bug is eating your big app... 🍏 ... 🐛', equal(3))
);

const testHeavyRedApples = test(
    '\n      ✅  Great! You found all of the Big Red Apples 🍎',
    validator('\n         🛑  Oops! A bug is eating your big red app... 🍎 ... 🐛', equal(2))
);

const testLightApples = test(
    '\n      ✅  Great! You found all of the Light Apples 🍏',
    validator('\n         🛑  Oops! A bug is eating your light app... 🍏 ... 🐛', equal(5))
);

const testLightGreenApples = test(
    '\n      ✅  Great! You found all of the Light Green Apples 🍏',
    validator('\n         🛑  Oops! A bug is eating your light green app... 🍏 ... 🐛', equal(2))
);

console.log('\n\n\n >>>>>> 🏁  All tests run. Check results.\n\n\n');

export default () => {
    testRedApples(onlyRedApples.length);
    testGreenApples(onlyGreenApples.length);
    testYellowLemons(onlyYellowLemons.length);
    testOnlyApples(onlyApples.length);
    testOnlyLemons(onlyLemons.length);
    testHeavyFruits(onlyHeavyFruits.length);
    testHeavyApples(onlyHeavyApples.length);
    testHeavyRedApples(onlyHeavyRedApples.length);
    testLightApples(onlyLightApples.length);
    testLightGreenApples(onlyLightGreenApples.length);
};
