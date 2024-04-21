import type { NotValue } from "@assertions/notValue/types";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value is not equal to the provided value.
 *
 * @param input - Value used in the comparison.
 *
 * @example
 * ```ts
 * const notNan = notValue(NaN);
 *
 * notNan(NaN); // Error: notValue
 * notNan(123); // passes
 * ```
 */
export const notValue =
	<const $Input>(input: $Input): Assertion<NotValue<$Input>> =>
	(v) =>
		v !== input || error(notValue);
