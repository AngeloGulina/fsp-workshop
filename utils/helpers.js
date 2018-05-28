const { compose } = require('./common');

const logger = message => {
    console.log(message);
    return message;
};

const pushTo = (arr, val) => {
    arr.push(val);
    return arr;
};

const checker = (...validators) => obj => validators.reduce(
    (errors, check) => check(obj) ? errors : pushTo(errors, check.message),
    []
);

const validator = (message, fun) => {
    const f = (...args) => fun.apply(fun, args);
    f['message'] = message;

    return f;
};

const test = (success, ...validators) => compose(
    messages => 0 === messages.length ? logger(success) : logger(...messages),
    checker(...validators),
);

module.exports = {
    logger,
    pushTo,
    test,
    validator,
};
