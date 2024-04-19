import type { Assertion } from "@the-minimal/types";

/**
 * Checks if one of two assertions passes.
 *
 * If none of them passes it throws an error.
 *
 * @param assertion1 - First assertion to be checked.
 * @param assertion2 - Second assertion to be checked.
 *
 * @example
 * ```ts
 * const trueish = or(literal(1), literal(true), literal("true"));
 *
 * trueish("yassss"); // Error: literal
 * trueish(1); // passes
 * trueish(true); // passes
 * trueish("true"); // passes
 * ```
 */
export const or2 =
	<$Value1, $Value2>(
		assertion1: Assertion<$Value1>,
		assertion2: Assertion<$Value2>,
	): Assertion<$Value1 | $Value2> =>
	(value: unknown) => {
		try {
			assertion1(value);
		} catch {
			assertion2(value);
		}
	};
