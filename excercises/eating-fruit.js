const { berries } = require('./res/berries');
const {
    logger,
} = require('../utils/helpers');

const {
    compose
} = require('../utils/fx');

const biteConstConditional = x => x > 5 ? 1.8 : 1.3;
const timeConst = 0.8;

// Override these w/ implementation

let totalBerries;
let totalBerriesWeight;
let timeToEatSimple; // a function of number of berries per the time const
let timeToEat; // a function of number of berries per the time const per the bite const based on the weight of the berry

// Start implementation

module.exports = {
    totalBerries,
    totalBerriesWeight,
    timeToEatSimple,
    timeToEat,
};
