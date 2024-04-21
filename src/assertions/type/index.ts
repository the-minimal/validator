import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks that the value is of the provided type.
 *
 * @param input - Type to be validated against.
 *
 * @example
 * ```ts
 * const string = type<string>("string");
 *
 * string(1); // Error: type
 * string("hello"); // passes
 * ```
 */
export const type =
	<$Input>(input: string): Assertion<$Input> =>
	(v) =>
		typeof v === input || error(type);
