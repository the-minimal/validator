import { validate } from "@assertions/validate";

/**
 * Checks if length of value is less than or equal to the provided length.
 *
 * @param length - Length used in the comparison.
 *
 * @example
 * ```ts
 * const passwordMaxLength = maxLength(16);
 *
 * passwordMaxLength("aaaaaaaaaaaaaaaaa"); // Error: maxLength
 * passwordMaxLength("Test123456"); // passes
 * ```
 */
export const maxLength = (length: number) =>
	validate<{ length: number }>(
		(v) => (v as any).length <= length,
		"maxLength",
		length,
	);
