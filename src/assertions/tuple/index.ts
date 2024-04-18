import { isArray } from "@assertions/isArray";
import type { InferTupleSchema, TupleSchema } from "@assertions/tuple/types";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks that assertion passes for each element of the tuple.
 *
 * @param assertions - Tuple schema to be checked.
 *
 * @example
 * ```ts
 * const position = tuple([number, number]);
 *
 * position(1); // Error: isArray
 * position([1, "2"]) // Error: type
 * position([1, 2]) // passes
 * ```
 */
export const tuple = <
	const $Schema extends TupleSchema,
	$Infered = InferTupleSchema<$Schema>,
>(
	assertions: $Schema,
): Assertion<$Infered> => {
	const l = assertions.length;

	return (value) => {
		isArray(value);

		for (let i = 0; i < l; ++i) {
			(assertions[i] as any)(value)[i];
		}
	};
};