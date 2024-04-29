import type {
	Assertion,
	InferAssertion,
	UnknownAssertion,
} from "@the-minimal/types";

/**
 * Checks if one of two assertions passes.
 *
 * If none of them passes it throws an error.
 *
 * @param brand1 - First assertion to be checked.
 * @param brand2 - Second assertion to be checked.
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
	<$Assertion1 extends UnknownAssertion, $Assertion2 extends UnknownAssertion>(
		assertion1: $Assertion1,
		assertion2: $Assertion2,
	): Assertion<InferAssertion<$Assertion1> | InferAssertion<$Assertion2>> =>
	(v: unknown) => {
		try {
			assertion1(v);
		} catch {
			assertion2(v);
		}
	};
