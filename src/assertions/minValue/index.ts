import { validate } from "@assertions/validate";

/**
 * Checks if value is greater than or equal to the provided length.
 *
 * @param length - Length used in the comparison.
 *
 * @example
 * ```ts
 * const adultAge = minValue(18);
 *
 * adultAge(15); // Error: minValue
 * adultAge(26); // passes
 * ```
 */
export const minValue = (length: number) =>
	validate<unknown>((v) => (v as any) >= length, "minValue", length);
