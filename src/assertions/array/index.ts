import { isArray } from "@assertions/isArray";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks that assertion passes for each element of the array.
 *
 * @param assertion - Assertion to be applied to each element of the array.
 *
 * @example
 * ```ts
 * const numbers = array(number);
 *
 * numbers([1, "2", 3]); // Error: type
 * numbers([1, 2, 3]); // passes
 * ```
 */
export const array =
	<$Value>(assertion: Assertion<$Value>): Assertion<Array<$Value>> =>
	(value) => {
		isArray(value);

		for (let i = 0; i < (value as unknown[]).length; ++i) {
			assertion((value as any)[i]);
		}
	};
