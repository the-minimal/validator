import type { Assertion } from "@the-minimal/types";
import { ValidationError } from "@utils/error";

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
	(input: unknown): Assertion<unknown> =>
	(v: unknown) =>
		v !== input || ValidationError(notValue);
