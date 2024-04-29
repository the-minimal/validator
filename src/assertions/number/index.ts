import { type } from "@assertions/type";

/**
 * Checks that the value is a number.
 *
 * @example
 * ```ts
 * number("hello"); // Error: type
 * number(1); // passes
 * ```
 */
export const number = type<number>("number");
