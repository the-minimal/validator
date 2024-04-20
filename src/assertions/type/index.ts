import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks that the value is of the provided type.
 *
 * @param value - Type to be validated against.
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
	<$Value>(value: string): Assertion<$Value> =>
	(v) =>
		typeof v === value || error(type);
