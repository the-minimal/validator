import { regex } from "@assertions/regex";

/**
 * Checks if value matches email RegExp.
 *
 * @example
 * ```ts
 * email("hello"); // Error: regex
 * email("yamiteru@icloud.com"); // passes
 * ```
 */
export const email = regex(
	/^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu,
);
