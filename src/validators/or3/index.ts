import type { Validation } from "@the-minimal/types";

export const or3 = <$Value1, $Value2, $Value3>(
	fn1: Validation<$Value1>,
	fn2: Validation<$Value2>,
	fn3: Validation<$Value3>,
) =>
	((value: unknown) => {
		try {
			fn1(value);
		} catch {
			try {
				fn2(value);
			} catch {
				fn3(value);
			}
		}
	}) as Validation<$Value1 | $Value2 | $Value3>;
