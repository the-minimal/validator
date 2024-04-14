import { Assertion, InferAssertionValues, Intersection } from "./types";

export const and = <
	$Assertions extends Array<Assertion>,
>(fns: $Assertions) => {
	const length = fns.length;

	return function(value: unknown): asserts value is Intersection<InferAssertionValues<$Assertions>> {
		for(let i = 0; i < length; ++i) {
			(fns as any)[i](value);
		}
	};
};
