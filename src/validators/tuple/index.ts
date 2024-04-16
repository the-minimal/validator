import type { Assertion } from "@the-minimal/types";
import type { FakeAssertion, InferAssertionValues } from "@types";
import { isArray } from "@validators/isArray";
import { length } from "@validators/length";

export const tuple = <$Tuple extends Array<Assertion<unknown>>>(
	tuple: $Tuple,
): Assertion<InferAssertionValues<$Tuple>> => {
	const l = tuple.length;
	const tupleLength: Assertion<unknown> = length(l);

	return (value) => {
		isArray(value);
		tupleLength(value);

		for (let i = 0; i < l; ++i) {
			(tuple[i] as FakeAssertion)((value as unknown[])[i]);
		}
	};
};
