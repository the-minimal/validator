import type {
	Assertion,
	FakeAssertion,
	InferAssertionValues,
	Intersection,
} from "./types";

export const and = <$Assertions extends Array<Assertion>>(fns: $Assertions) => {
	const length = fns.length;

	return (
		value: unknown,
	): asserts value is Intersection<InferAssertionValues<$Assertions>> => {
		for (let i = 0; i < length; ++i) {
			(fns[i] as FakeAssertion)(value);
		}
	};
};
