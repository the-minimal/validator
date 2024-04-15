import type { Assertion } from "@types";

export const or3 = <$Value1, $Value2, $Value3>(
	fn1: Assertion<$Value1>,
	fn2: Assertion<$Value2>,
	fn3: Assertion<$Value3>,
): Assertion<$Value1 | $Value2> => {
	return (value: unknown) => {
		try {
			fn1(value);
		} catch {
			try {
				fn2(value);
			} catch {
				fn3(value);
			}
		}
	};
};
