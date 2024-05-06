import { regex } from "@assertions/regex/index.js";

/**
 * Checks if value matches email RegExp.
 *
 * @example
 * ```ts
 * email("hello"); // Error: regex
 * email("yamiteru@icloud.com"); // passes
 * ```
 */
export const email = regex(/^\w+@.+\..+$/);
