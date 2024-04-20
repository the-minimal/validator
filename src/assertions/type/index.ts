import { REASON_TYPE } from "@constants";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks that the value is of the provided type.
 *
 * @param type - Type to be validated against.
 *
 * @example
 * ```ts
 * const string = type<string>("string");
 *
 * string(1); // Error: type
 * string("hello"); // passes
 * ```
 */
export const type =
	<$Type>(type: string): Assertion<$Type> =>
	(v) =>
		typeof v === type || error(REASON_TYPE);
