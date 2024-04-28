import type { Validate } from "@assertions/value/types";
import { error } from "@error";

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
export const value = <const $Input>(input: $Input) =>
	((v: unknown) =>
		v === input || error(value)) as unknown as Validate.Value.Eq<$Input>;
