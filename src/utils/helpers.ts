import { compose } from './common';
import { Generic } from "./fx";

interface Logger extends Function {
    (...messages: Generic[]): Generic[]

    (message: Generic): Generic
}

interface Validator extends Function {
    (obj: Generic): boolean;

    message: string;
}

export const logger: Logger = (message: any) => {
    console.log(message);
    return message;
};

const logSuccessOrError = (successMessage: string) => (errorMessages: string[]) => 0 === errorMessages.length ? logger(successMessage) : logger(...errorMessages);

export const pushTo = (arr: Generic[], val: Generic) => {
    arr.push(val);
    return arr;
};

export const validator = (message: string, fun: (obj: Generic) => boolean): Validator => {
    // @ts-ignore
    const f: Validator = (...args: Generic[]) => fun.apply(fun, args);
    f['message'] = message;

    return f;
};

export const checker = (validators: Validator[]) => (obj: Generic): string[] => validators.reduce(
    (errors, validator) => validator(obj) ? errors : pushTo(errors, validator.message), []
);

export const test = (message: string, ...validators: Validator[]) => compose(
    logSuccessOrError(message),
    checker(validators),
);
