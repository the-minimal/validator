import { isArray } from "@assertions/isArray";
import { length } from "@assertions/length";
import type { Assertion, FakeAssertion, InferAssertionValues } from "@types";

export const tuple = <$Tuple extends Assertion[]>(
	tuple: $Tuple,
): Assertion<InferAssertionValues<$Tuple>> => {
	const l = tuple.length;
	const tupleLength: Assertion = length(l);

	return (value) => {
		isArray(value);
		tupleLength(value);

		for (let i = 0; i < l; ++i) {
			(tuple[i] as FakeAssertion)((value as unknown[])[i]);
		}
	};
};
