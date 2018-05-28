const compose = (...fns) => fns.reduceRight((first, second) => (...args) => second(first(...args)));

module.exports = {
    compose,
};
