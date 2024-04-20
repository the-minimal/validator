import type { Includes } from "@assertions/includes/types";
import { REASON_INCLUDES } from "@constants";
import { error } from "@error";
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
	(v: any) =>
		v.includes(value) || error(REASON_INCLUDES);
