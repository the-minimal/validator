import type { Assertion, Optional } from "@the-minimal/types";

/**
 * Checks if the assertion passes or if the value is undefined.
 *
 * @param assertion - Assertion to be checked.
 *
 * @example
 * ```ts
 * const maybeString = optional(string);
 *
 * maybeString(1); // Error: type
 * maybeString("hello"); // passes
 * maybeString(undefined); // passes
 * ```
 */
export const optional =
	<$Input>(assertion: Assertion<$Input>): Assertion<Optional<$Input>> =>
	(v) =>
		v === undefined || assertion(v);
