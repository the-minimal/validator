import type { StartsWith } from "@assertions/startsWith/types";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value starts with another value.
 *
 * @param value - Value used in matching.
 *
 * @example
 * ```ts
 * const startsWithId = startsWith("ID: ");
 *
 * startsWithId("123"); // Error: startsWith
 * startsWithId("ID: 123"); // passes
 * ```
 */
export const startsWith =
	<$Value extends string>(value: $Value): Assertion<StartsWith<$Value>> =>
	(v: any) =>
		v.startsWith(value) || error(startsWith);
