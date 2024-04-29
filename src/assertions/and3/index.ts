import type {
	Assertion,
	InferAssertion,
	UnknownAssertion,
} from "@the-minimal/types";

/**
 * Checks that all three assertions pass.
 *
 * @param assertion1- First assertion to be checked.
 * @param assertion2- Second assertion to be checked.
 * @param assertion3- Third assertion to be checked.
 *
 * @example
 * ```ts
 * const userEmail = and(string, minLength(5), email);
 *
 * userEmail(1); // Error: type
 * userEmail("a"); // Error: minLength
 * userEmail("Hello world"); // Error: email
 * userEmail("yamiteru@icloud.com"); // passes
 * ```
 */
export const and3 =
	<
		$Assertion1 extends UnknownAssertion,
		$Assertion2 extends UnknownAssertion,
		$Assertion3 extends UnknownAssertion,
	>(
		assertion1: $Assertion1,
		assertion2: $Assertion2,
		assertion3: $Assertion3,
	): Assertion<
		InferAssertion<$Assertion1> &
			InferAssertion<$Assertion2> &
			InferAssertion<$Assertion3>
	> =>
	(v: unknown) => {
		assertion1(v);
		assertion2(v);
		assertion3(v);
	};
