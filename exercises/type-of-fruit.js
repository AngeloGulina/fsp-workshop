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

const getProp = function behaviour(key) {
    return function data(obj) {
        return obj[key];
    };
}

// Start implementation
const isRed = equal('red');
const isGreen = equal('green');

const isApple = equal('apple');
const isLemon = equal('lemon');

const getType = getProp('type');
const getColor = getProp('color');
const getWeight = getProp('weight');

const isTypeApple = compose(isApple, getType);
const isTypeLemon = compose(isLemon, getType);
const isColorGreen = compose(isGreen, getColor);

const lowerThan = first => second => second < first;
const isLight = compose(lowerThan(heavy), getWeight);

const isLightApple = both(isLight, isTypeApple);
const isLightGreenApple = both(isLightApple, isColorGreen);

onlyRedApples = applesList.filter(isRed);
onlyGreenApples = applesList.filter(isGreen);
onlyApples = fruitsList.filter(isTypeApple);
onlyLemons = fruitsList.filter(isTypeLemon);
onlyLightApples = fruitsList.filter(isLightApple);
onlyLightGreenApples = fruitsList.filter(isLightGreenApple);

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
