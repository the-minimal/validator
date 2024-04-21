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
	<$Input>(assertion: Assertion<$Input>): Assertion<Array<$Input>> =>
	(v) => {
		isArray(v);

		for (let i = 0; i < v.length; ++i) {
			assertion((v as any)[i]);
		}
	};
