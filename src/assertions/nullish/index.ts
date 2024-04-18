import type { Assertion, Nullish } from "@the-minimal/types";

/**
 * Checks if the assertion passes or if the value is null or undefined.
 *
 * @param assertion - Assertion to be checked.
 *
 * @example
 * ```ts
 * const maybeString = nullish(string);
 *
 * maybeString(1); // Error: type
 * maybeString("hello"); // passes
 * maybeString(null); // passes
 * maybeString(undefined); // passes
 * ```
 */
export const nullish =
	<$Value>(assertion: Assertion<$Value>): Assertion<Nullish<$Value>> =>
	(value) => {
		value !== null && value !== undefined && assertion(value);
	};
