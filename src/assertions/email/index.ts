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
export const email = regex(/^\w+@.+\..+$/) as Validate.Regex.Email;
