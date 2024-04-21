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
	<$Input1, $Input2>(
		assertion1: Assertion<$Input1>,
		assertion2: Assertion<$Input2>,
	): Assertion<$Input1 | $Input2> =>
	(v) => {
		try {
			assertion1(v);
		} catch {
			assertion2(v);
		}
	};
