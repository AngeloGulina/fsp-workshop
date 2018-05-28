const { compose } = require('./common');
const { logger } = require('./helpers');

const applyArg = arg => fn => fn(arg);
const both = (...args) => given => args.reduce((result, fun) => fun(result) && result, given);
const converge = (after, fns) => arg => after.call(null, fns.map(applyArg((arg))));
const equal = first => second => first === second;
const identity = x => x;
const not = fun => val => !fun(val);
const notEqual = first => second => first !== second;
const partial = (fn, ...first) => (...last) => fn(...first, ...last);
const spreadArgs = fn => args => fn(...args);

module.exports = {
    both,
    converge,
    compose,
    equal,
    identity,
    not,
    notEqual,
    partial,
    spreadArgs,
};
