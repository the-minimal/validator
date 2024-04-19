import { validate } from "@assertions/validate";

/**
 * Checks if length of value is equal to the provided length.
 *
 * @param length - Length used in the comparison.
 *
 * @example
 * ```ts
 * const nonEmpty = notLength(0);
 *
 * nonEmpty(""); // Error: notLength
 * nonEmpty("hello"); // passes
 * ```
 */
export const length = (length: number) =>
	validate<{ length: number }>(
		(v) => (v as any).length === length,
		"length",
		length,
	);
