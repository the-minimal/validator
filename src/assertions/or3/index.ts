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
 * @param assertion1 - First assertion to be checked.
 * @param assertion2 - Second assertion to be checked.
 * @param assertion2 - Third assertion to be checked.
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
export const or3 =
	<
		$Assertion1 extends UnknownAssertion,
		$Assertion2 extends UnknownAssertion,
		$Assertion3 extends UnknownAssertion,
	>(
		assertion1: $Assertion1,
		assertion2: $Assertion2,
		assertion3: $Assertion3,
	): Assertion<
		| InferAssertion<$Assertion1>
		| InferAssertion<$Assertion2>
		| InferAssertion<$Assertion3>
	> =>
	(v: unknown) => {
		try {
			assertion1(v);
		} catch {
			try {
				assertion2(v);
			} catch {
				assertion3(v);
			}
		}
	};
