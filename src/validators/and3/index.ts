import type { Validation } from "@the-minimal/types";

export const and3 = <$Value1, $Value2, $Value3>(
	fn1: Validation<$Value1>,
	fn2: Validation<$Value2>,
	fn3: Validation<$Value3>,
) =>
	((value: unknown) => {
		fn1(value);
		fn2(value);
		fn3(value);
	}) as Validation<$Value1 & $Value2 & $Value3>;
