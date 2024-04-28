import { error } from "@error";
import type { Validate } from "./types";

/**
 * Checks if value is less than or equal to the provided length.
 *
 * @param input - Value used in the comparison.
 *
 * @example
 * ```ts
 * const teenagerAge = maxValue(17);
 *
 * teenagerAge(26); // Error: maxValue
 * teenagerAge(15); // passes
 * ```
 */
export const maxValue = <const $Input>(input: $Input) =>
	((v: any) =>
		v <= input || error(maxValue)) as unknown as Validate.Value.Max<$Input>;
