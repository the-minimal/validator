import { type } from "@assertions/type";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks that the value is a number.
 *
 * @example
 * ```ts
 * number("hello"); // Error: type
 * number(1); // passes
 * ```
 */
export const number: Assertion<number> = type<number>("number");
