import type { Email } from "@assertions/email/types";
import { regex } from "@assertions/regex";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value matches email RegExp.
 *
 * @example
 * ```ts
 * email("hello"); // Error: regex
 * email("yamiteru@icloud.com"); // passes
 * ```
 */
export const email: Assertion<Email> = regex(
	/^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu,
);
