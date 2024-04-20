import type { Integer } from "@assertions/integer/types";
import { Reason } from "@constants";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value is integer.
 *
 * @example
 * ```ts
 * integer(1.1) // Error: integer
 * integer(1) // passes
 * ```
 */
export const integer: Assertion<Integer> = (v) =>
	Number.isInteger(v) || error(Reason.integer);
