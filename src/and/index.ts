import type {
	Assertion,
	FakeAssertion,
	InferAssertionValues,
	Intersection,
} from "../types";

export const and = <$Assertions extends Array<Assertion>>(
	fns: $Assertions,
): Assertion<Intersection<InferAssertionValues<$Assertions>>> => {
	const length = fns.length;

	return (value) => {
		for (let i = 0; i < length; ++i) {
			(fns[i] as FakeAssertion)(value);
		}
	};
};
