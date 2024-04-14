import type { Assertion } from "./types";

export const either = <$Value1, $Value2>(
	fn1: Assertion<$Value1>,
	fn2: Assertion<$Value2>,
) => {
	return (value: unknown): asserts value is $Value1 | $Value2 => {
		try {
			fn1(value);
		} catch {
			fn2(value);
		}
	};
};
