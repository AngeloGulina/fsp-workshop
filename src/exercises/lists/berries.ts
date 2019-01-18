export enum BerryType {
    strawberry,
    blueberry,
    blackberry,
    raspberry
}

export interface Berry {
    count: number,
    type: BerryType,
    weight: number,
}

export const berries: Berry[] = [
    { count: 3, type: BerryType.strawberry, weight: 5, },
    { count: 8, type: BerryType.blueberry, weight: 3, },
    { count: 2, type: BerryType.blackberry, weight: 6, },
    { count: 1, type: BerryType.raspberry, weight: 8, },
];
