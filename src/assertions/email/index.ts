import { regex } from "@assertions/regex";
import type { Validate } from "./types";

/**
 * Checks if value matches email RegExp.
 *
 * @example
 * ```ts
 * email("hello"); // Error: regex
 * email("yamiteru@icloud.com"); // passes
 * ```
 */
export const email: Validate.Regex.Email = regex(/^\w+@.+\..+$/);
