import { validate } from "@assertions/validate";

/**
 * Checks if value is integer.
 *
 * @example
 * ```ts
 * integer(1.1) // Error: integer
 * integer(1) // passes
 * ```
 */
export const integer = validate<number>((v) => Number.isInteger(v), "integer");
