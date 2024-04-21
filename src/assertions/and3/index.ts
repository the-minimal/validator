import type { Assertion } from "@the-minimal/types";

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
	<$Input1, $Input2, $Input3>(
		assertion1: Assertion<$Input1>,
		assertion2: Assertion<$Input2>,
		assertion3: Assertion<$Input3>,
	): Assertion<$Input1 & $Input2 & $Input3> =>
	(v) => {
		assertion1(v);
		assertion2(v);
		assertion3(v);
	};
