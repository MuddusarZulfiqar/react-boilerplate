/**
 * Maybe type utility that allows for a value to be either of a specified type or undefined.
 * * @template T - The type to be made optional.
 * * @example
 * type Example = Maybe<string>;
 * Example can be string or undefined
    export type Maybe<T> = T | undefined;
 */

export type Maybe<T> = T | null | undefined;
