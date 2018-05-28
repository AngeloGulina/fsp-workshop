const {
    applesList,
    fruitsList,
} = require('./res/fruitsLists');

const {
    logger,
} = require('../utils/helpers');

const {
    compose
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
