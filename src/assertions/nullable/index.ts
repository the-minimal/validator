import type { Assertion, Nullable } from "@the-minimal/types";

/**
 * Checks if the assertion passes or if the value is null.
 *
 * @param assertion - Assertion to be checked.
 *
 * @example
 * ```ts
 * const maybeString = nullable(string);
 *
 * maybeString(1); // Error: type
 * maybeString("hello"); // passes
 * maybeString(null); // passes
 * ```
 */
export const nullable =
	<$Input>(assertion: Assertion<$Input>): Assertion<Nullable<$Input>> =>
	(v) =>
		v === null || assertion(v);
