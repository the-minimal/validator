import type { Assertion } from "@the-minimal/types";

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
	<$Input1, $Input2>(
		assertion1: Assertion<$Input1>,
		assertion2: Assertion<$Input2>,
	): Assertion<$Input1 & $Input2> =>
	(v) => {
		assertion1(v);
		assertion2(v);
	};
