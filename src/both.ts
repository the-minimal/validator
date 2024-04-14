import type { Assertion } from "./types";

export const both = <$Value1, $Value2>(
	fn1: Assertion<$Value1>,
	fn2: Assertion<$Value2>,
) => {
	return (value: unknown): asserts value is $Value1 & $Value2 => {
		fn1(value);
		fn2(value);
	};
};
