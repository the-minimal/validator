import type { EndsWith } from "@assertions/endsWith/types";
import { REASON_ENDS_WITH } from "@constants";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value ends with another value.
 *
 * @param value - Value used in matching.
 *
 * @example
 * ```ts
 * const question = endsWith("?");
 *
 * question("hey!"); // Error: endsWith
 * question("really?"); // passes
 * ```
 */
export const endsWith =
	<$Value extends string>(value: $Value): Assertion<EndsWith<$Value>> =>
	(v: any) =>
		v.endsWith(value) || error(REASON_ENDS_WITH);
