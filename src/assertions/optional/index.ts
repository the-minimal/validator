import type { Assertion, Maybe } from "@the-minimal/types";

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
	<$Value>(assertion: Assertion<$Value>): Assertion<Maybe<$Value>> =>
	(v: unknown) =>
		v === undefined || (assertion as any)(v);
