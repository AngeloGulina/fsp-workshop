export interface Generic {
}

/**
 * Takes a value and applies a function to it.
 * @sig a -> (a -> b) -> b
 */
export const applyTo = (arg: Generic) => (fn: Function): Generic => fn(arg);

/**
 * Calls all the given functions and returns the && of the results.
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> ... -> (*... -> Boolean)
 */
export const both = (...fns: ( (x: Generic) => boolean )[]) => (given: boolean) => fns.reduce((result, fun) => fun(result) && result, given);

/**
 * Takes a converging function and an unlimited numbers of branching functions.
 * When invoked with some arguments, each branching function is applied with those arguments.
 * The result of each branching function is then used from the converging function.
 * @sig ((x, y, ...) -> z) -> [(a -> x), (a -> y), ...] -> (a -> z)
 */
export const converge = (after: Function, fns: Function[]) => (arg: Generic): Generic => after.call(null, fns.map(applyTo(( arg ))));

/**
 * Returns whether the given arguments are exactly the same.
 * @sig a -> b -> Boolean
 */
export const equal = (first: Generic) => (second: Generic): boolean => first === second;

/**
 * @sig a -> a
 */
export const identity = (x: Generic): Generic => x;

/**
 * A function that returns the negation of its result.
 * @sig (a -> Boolean) -> a -> Boolean
 */
export const negate = (fun: (x: Generic) => boolean) => (val: Generic): boolean => !fun(val);

/**
 * Returns whether the given arguments are not the same.
 * @sig a -> b -> Boolean
 */
export const notEqual = (first: Generic) => (second: Generic): boolean => first !== second;

/**
 * Takes a function and some arguments.
 * Returns a function which result will be the first function applied with all the given arguments (first and last);
 * @sig ((a, b, c, ..., n) -> z, (a, b, ...)) -> (c, ..., n) -> z
 */
export const partial = (fn: Function, ...first: Generic[]) => (...last: Generic[]): Generic => fn(...first, ...last);

/**
 * Takes a function which doesn't use array parameters spread the given array as accepted parameters.
 * @sig ((a, b, ...) -> z) -> [a, b, ...] -> z
 */
export const spreadArgs = (fn: Function) => (args: Generic[]): Generic => fn(...args);
