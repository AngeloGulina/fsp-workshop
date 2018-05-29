const {
    applesList,
    fruitsList,
} = require('./res/fruitsLists');

const {
    logger,
} = require('../utils/helpers');

const {
    both,
    compose,
    equal,
} = require('../utils/fx');

const heavy = 28;

// Override these w/ implementation: you can use both appleList or fruitList

let onlyRedApples;
let onlyGreenApples;

// Override these w/ implementation: use fruitList

let onlyHeavyFruits;
let onlyApples;
let onlyLemons;

let onlyYellowLemons;

let onlyHeavyApples;
let onlyHeavyRedApples;
let onlyLightApples;
let onlyLightGreenApples;

// Start implementation

const onlyRed = equal('red');
const onlyGreen = equal('green');

const prop = key => obj => obj[key];
const is = first => second => first === second;
const greater = first => second => second >= first;
const lower = first => second => second <= first;

const color = prop('color');
const type = prop('type');
const weight = prop('weight');

const isLemon = compose(is('lemon'), type);
const isApple = compose(is('apple'), type);
const isHeavy = compose(greater(heavy), weight);
const isLight = compose(lower(heavy), weight);

const isGreen = compose(is('green'), color);
const isRed = compose(is('red'), color);
const isYellow = compose(is('yellow'), color);

const isHeavyApple = both(isApple, isHeavy);
const isLightApple = both(isApple, isLight);
const isGreenLightApple = both(isApple, isLight, isGreen);
const isHeavyRedApple = both(isApple, isHeavy, isRed);
const isYellowLemon = both(isLemon, isYellow);

onlyRedApples = applesList.filter(onlyRed);
onlyGreenApples = applesList.filter(onlyGreen);
onlyHeavyFruits = fruitsList.filter(isHeavy);
onlyApples = fruitsList.filter(isApple);
onlyLemons = fruitsList.filter(isLemon);
onlyYellowLemons = fruitsList.filter(isYellowLemon);
onlyHeavyApples = fruitsList.filter(isHeavyApple);
onlyHeavyRedApples = fruitsList.filter(isHeavyRedApple);
onlyLightApples = fruitsList.filter(isLightApple);
onlyLightGreenApples = fruitsList.filter(isGreenLightApple);

module.exports = {
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
};
