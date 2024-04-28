import type { Validate } from "@assertions/notValue/types";
import { error } from "@error";

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
export const notValue = <const $Input>(input: $Input) =>
	((v: unknown) =>
		v !== input || error(notValue)) as unknown as Validate.Value.Ne<$Input>;
