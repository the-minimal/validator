import type { Assertion, FakeAssertion, InferAssertionValues } from "@types";
import { error } from "@utils/error";

export const tuple = <$Tuple extends Assertion[]>(
	tuple: $Tuple,
): Assertion<InferAssertionValues<$Tuple>> => {
	const length = tuple.length;

	return (value) => {
		!Array.isArray(value) && error("Not an array");

		for (let i = 0; i < length; ++i) {
			(tuple[i] as FakeAssertion)((value as unknown[])[i]);
		}
	};
};
