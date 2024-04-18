import type { Assertion } from "@the-minimal/types";

export const and2 = <$Value1, $Value2>(
	fn1: Assertion<$Value1>,
	fn2: Assertion<$Value2>,
) =>
	((value: unknown) => {
		fn1(value);
		fn2(value);
	}) as Assertion<$Value1 & $Value2>;