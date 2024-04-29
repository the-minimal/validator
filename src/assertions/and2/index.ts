import type {
	Assertion,
	InferAssertion,
	UnknownAssertion,
} from "@the-minimal/types";

/**
 * Checks that both assertions pass.
 *
 * @param assertion1- First assertion to be checked.
 * @param assertion2- Second assertion to be checked.
 *
 * @example
 * ```ts
 * const userEmail = and(string, email);
 *
 * userEmail(1); // Error: type
 * userEmail("Hello world"); // Error: email
 * userEmail("yamiteru@icloud.com"); // passes
 * ```
 */
export const and2 =
	<$Assertion1 extends UnknownAssertion, $Assertion2 extends UnknownAssertion>(
		assertion1: $Assertion1,
		assertion2: $Assertion2,
	): Assertion<InferAssertion<$Assertion1> & InferAssertion<$Assertion2>> =>
	(v: unknown) => {
		assertion1(v);
		assertion2(v);
	};
