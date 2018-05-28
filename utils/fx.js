/**
 * Performs a right-to-left composition.
 * @sig ((y -> z), (x -> y), ...) -> ((a, b, ...) -> z)
 */
const { compose } = require('./common');
const { logger } = require('./helpers');

/**
 * Takes a value and applies a function to it.
 * @sig a -> (a -> b) -> b
 */
const applyTo = arg => fn => fn(arg);

/**
 * Calls all the given functions and returns the && of the results.
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> ... -> (*... -> Boolean)
 */
const both = (...args) => given => args.reduce((result, fun) => fun(result) && result, given);

/**
 * Takes a converging function and an unlimited numbers of branching functions.
 * When invoked with some arguments, each branching function is applied with those arguments.
 * The result of each branching function is then used from the converging function.
 * @sig ((x, y, ...) -> z) -> [(a -> x), (a -> y), ...] -> (a -> z)
 */
const converge = (after, fns) => arg => after.call(null, fns.map(applyTo((arg))));

/**
 * Returns whether the given arguments are exactly the same.
 * @sig a -> b -> Boolean
 */
const equal = first => second => first === second;

/**
 * @sig a -> a
 */
const identity = x => x;

/**
 * A function that returns the negation of its result.
 * @sig (a -> Boolean) -> a -> Boolean
 */
const negate = fun => val => !fun(val);

/**
 * Returns whether the given arguments are not the same.
 * @sig a -> b -> Boolean
 */
const notEqual = first => second => first !== second;

/**
 * Takes a function and some arguments.
 * Returns a function which result will be the first function applied with all the given arguments (first and last);
 * @sig ((a, b, c, ..., n) -> z, (a, b, ...)) -> (c, ..., n) -> z
 */
const partial = (fn, ...first) => (...last) => fn(...first, ...last);

/**
 * Takes a function which doesn't use array parameters spread the given array as accepted parameters.
 * @sig ((a, b, ...) -> z) -> [a, b, ...] -> z
 */
const spreadArgs = fn => args => fn(...args);

module.exports = {
    both,
    converge,
    compose,
    equal,
    identity,
    negate,
    notEqual,
    partial,
    spreadArgs,
};
