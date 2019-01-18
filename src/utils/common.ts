export const compose = (...fns: Function[]) => fns.reduceRight((first, second) => (...args: any) => second(first(...args)));
