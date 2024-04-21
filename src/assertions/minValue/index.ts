import type { MinValue } from "@assertions/minValue/types";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value is greater than or equal to the provided length.
 *
 * @param input - Value used in the comparison.
 *
 * @example
 * ```ts
 * const adultAge = minValue(18);
 *
 * adultAge(15); // Error: minValue
 * adultAge(26); // passes
 * ```
 */
export const minValue =
	<const $Input>(input: $Input): Assertion<MinValue<$Input>> =>
	(v: any) =>
		v >= input || error(minValue);
