import type { Value } from "@assertions/value/types";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value is equal to the provided value.
 *
 * @param input - Value used in the comparison.
 *
 * @example
 * ```ts
 * const isNull = value(null);
 *
 * isNull(""); // Error: value
 * isNull(null); // passes
 * ```
 */
export const value =
	<const $Input>(input: $Input): Assertion<Value<$Input>> =>
	(v) =>
		v === input || error(value);
