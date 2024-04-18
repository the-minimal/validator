import { type } from "@assertions/type";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks that the value is a string.
 *
 * @example
 * ```ts
 * string(1); // Error: type
 * string("hello"); // passes
 * ```
 */
export const string: Assertion<string> = type<string>("string");
