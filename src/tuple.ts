import { error } from "./error";
import type { Assertion, FakeAssertion, InferAssertionValues } from "./types";

export const tuple = <$Tuple extends Assertion[]>(tuple: $Tuple) => {
	const length = tuple.length;

	return function (
		value: unknown,
	): asserts value is InferAssertionValues<$Tuple> {
		!Array.isArray(value) && error("Not an array");

		for (let i = 0; i < length; ++i) {
			(tuple[i] as FakeAssertion)(value[i]);
		}
	};
};
