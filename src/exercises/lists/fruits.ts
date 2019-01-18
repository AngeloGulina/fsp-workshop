export enum FruitType {
    apple,
    lemon,
}

export enum FruitColor {
    green,
    red,
    yellow,
    lime,
}

export interface Fruit {
    color: FruitColor,
    type: FruitType,
    weight: number,
}

export const fruits: Fruit[] = [
    { color: FruitColor.green, type: FruitType.apple, weight: 15, },
    { color: FruitColor.green, type: FruitType.apple, weight: 11, },
    { color: FruitColor.green, type: FruitType.apple, weight: 30, },
    { color: FruitColor.red, type: FruitType.apple, weight: 23, },
    { color: FruitColor.red, type: FruitType.apple, weight: 23, },
    { color: FruitColor.red, type: FruitType.apple, weight: 32, },
    { color: FruitColor.red, type: FruitType.apple, weight: 30, },
    { color: FruitColor.red, type: FruitType.apple, weight: 20, },
    { color: FruitColor.yellow, type: FruitType.lemon, weight: 30, },
    { color: FruitColor.yellow, type: FruitType.lemon, weight: 10, },
    { color: FruitColor.yellow, type: FruitType.lemon, weight: 30, },
    { color: FruitColor.yellow, type: FruitType.lemon, weight: 10, },
    { color: FruitColor.lime, type: FruitType.lemon, weight: 12, },
    { color: FruitColor.lime, type: FruitType.lemon, weight: 31, },
    { color: FruitColor.lime, type: FruitType.lemon, weight: 10, },
    { color: FruitColor.lime, type: FruitType.lemon, weight: 32, },
];
