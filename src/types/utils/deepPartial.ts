/**
 * DeepRequired type utility
 * This utility type recursively makes all properties of a type required.
 * It is the inverse of DeepPartial.
 * @template T - The type to make all properties required.
 * @example
 * type Example = {
 *   a?: {
 *     b?: string;
 *   };
 * };
 *
 * type RequiredExample = DeepRequired<Example>;
 */
export type DeepRequired<T> = {
    [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
} & Required<T>;