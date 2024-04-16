import type { Validation } from "@the-minimal/types";

export const or2 = <$Value1, $Value2>(
	fn1: Validation<$Value1>,
	fn2: Validation<$Value2>,
) =>
	((value: unknown) => {
		try {
			fn1(value);
		} catch {
			fn2(value);
		}
	}) as Validation<$Value1 | $Value2>;
