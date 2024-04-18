import type { Assertion } from "@the-minimal/types";

/**
 * Checks if one of two assertions passes.
 *
 * If none of them passes it throws an error.
 *
 * @param assertion1 - First assertion to be checked.
 * @param assertion2 - Second assertion to be checked.
 * @param assertion3 - Third assertion to be checked.
 *
 * @example
 * ```ts
 * const trueish = or(literal(1), literal(true));
 *
 * trueish("yassss"); // Error: literal
 * trueish(1); // passes
 * trueish(true); // passes
 * ```
 */
export const or3 = <$Value1, $Value2, $Value3>(
	assertion1: Assertion<$Value1>,
	assertion2: Assertion<$Value2>,
	assertion3: Assertion<$Value3>,
) =>
	((value: unknown) => {
		try {
			assertion1(value);
		} catch {
			try {
				assertion2(value);
			} catch {
				assertion3(value);
			}
		}
	}) as Assertion<$Value1 | $Value2 | $Value3>;
