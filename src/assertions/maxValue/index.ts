import { validate } from "@assertions/validate";

/**
 * Checks if value is less than or equal to the provided length.
 *
 * @param length - Length used in the comparison.
 *
 * @example
 * ```ts
 * const teenagerAge = maxValue(17);
 *
 * teenagerAge(26); // Error: maxValue
 * teenagerAge(15); // passes
 * ```
 */
export const maxValue = (length: number) =>
	validate<unknown>((v) => (v as any) <= length, "maxValue", length);
