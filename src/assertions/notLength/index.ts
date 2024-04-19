import { validate } from "@assertions/validate";

/**
 * Checks if length of value is not equal to the provided length.
 *
 * @param length - Length used in the comparison.
 *
 * @example
 * ```ts
 * const twoLetters = length(2);
 *
 * twoLetters(""); // Error: length
 * twoLetters("ab"); // passes
 * ```
 */
export const notLength = (length: number) =>
	validate<{ length: number }>(
		(v) => (v as any).length !== length,
		"notLength",
		length,
	);
