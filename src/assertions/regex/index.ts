import { validate } from "@assertions/validate";

/**
 * Checks if value matches regex pattern.
 *
 * @param pattern - Pattern used for matching.
 *
 * @example
 * ```ts
 * const digits = regex(/[0-9]/);
 *
 * email("hello"); // Error: regex
 * email("123"); // passes
 * ```
 */
export const regex = (pattern: RegExp) =>
	validate<string>((v) => pattern.test(v as string), "regex", pattern);
