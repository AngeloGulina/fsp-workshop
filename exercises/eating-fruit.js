const { berries } = require('./res/berries');
const {
    logger,
} = require('../utils/helpers');

const {
    compose,
    converge,
    partial,
    spreadArgs,
} = require('../utils/fx');

const biteConstConditional = x => x > 5 ? 1.8 : 1.3;
const timeConst = 0.8;

// Override these w/ implementation

let totalBerries;
let totalBerriesWeight;
let timeToEatSimple; // a function of number of berries per the time const
let timeToEat; // a function of number of berries per the time const per the bite const based on the weight of the berry

// Start implementation

const prop = key => obj => obj[key];
const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const multiplyArray = spreadArgs(multiply);
const perTimeConst = partial(multiply, timeConst);

const count = prop('count');
const type = prop('type');
const weight = prop('weight');

const biteConst = compose(biteConstConditional, weight);
const biteConstPerWeight = converge(multiplyArray, [biteConst, count]);
const perBiteConst = compose(perTimeConst, biteConstPerWeight);

totalBerries = berries.map(count).reduce(sum);
totalBerriesWeight = berries.map(weight).reduce(sum);
timeToEatSimple = perTimeConst(totalBerries);
timeToEat = berries.map(perBiteConst).reduce(sum);

module.exports = {
    totalBerries,
    totalBerriesWeight,
    timeToEatSimple,
    timeToEat,
};
