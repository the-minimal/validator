import type { Assertion } from "@types";

export const or2 = <$Value1, $Value2>(
	fn1: Assertion<$Value1>,
	fn2: Assertion<$Value2>,
): Assertion<$Value1 | $Value2> => {
	return (value: unknown) => {
		try {
			fn1(value);
		} catch {
			fn2(value);
		}
	};
};
