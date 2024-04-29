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
	<$Type>(input: string): Assertion<$Type> =>
	(v: unknown) =>
		typeof v === input || error(type);
