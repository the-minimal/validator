import { error } from "@error";

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
export const maxValue = (input: unknown) => (v: unknown) =>
	<any>v <= <any>input || error(maxValue);
