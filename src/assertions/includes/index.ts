import type { Includes } from "@assertions/includes/types";
import { Reason, error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value includes with another value.
 *
 * @param value - Value used in matching.
 *
 * @example
 * ```ts
 * const hello = includes("hello");
 *
 * hello("ahoj"); // Error: includes
 * hello("--hello--"); // passes
 * ```
 */
export const includes =
	<$Type>(value: $Type): Assertion<Includes<$Type>> =>
	(v) =>
		(v as any).includes(value) || error(Reason.includes);
