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
	(input: unknown): Assertion<unknown> =>
	(v: unknown) =>
		<any>v >= <any>input || error(minValue);
