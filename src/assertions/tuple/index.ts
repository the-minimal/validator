import { isArray } from "@assertions/isArray";
import type { InferTupleSchema, TupleSchema } from "@assertions/tuple/types";
import type { Assertion } from "@the-minimal/types";

export const tuple = <
	const $Tuple extends TupleSchema,
	$Infered = InferTupleSchema<$Tuple>,
>(
	tuple: $Tuple,
) => {
	const l = tuple.length;

	return ((value) => {
		isArray(value);

		for (let i = 0; i < l; ++i) {
			(tuple[i] as any)(value)[i];
		}
	}) as Assertion<$Infered>;
};
