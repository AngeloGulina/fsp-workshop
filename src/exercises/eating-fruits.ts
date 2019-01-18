import { berries, Berry } from "./lists/berries";

// const biteConstConditional = x => x > 5 ? 1.8 : 1.3;
const timeConst = 0.8;

// Override these w/ implementation

let totalBerries: Berry[] = [];
let totalBerriesWeight: number = 0;
let timeToEatSimple: number = 0; // a function of number of berries per the time const
let timeToEat: number = 0; // a function of number of berries per the time const per the bite const based on the weight of the berry

// Start implementation

export {
    totalBerries,
    totalBerriesWeight,
    timeToEatSimple,
    timeToEat,
};
