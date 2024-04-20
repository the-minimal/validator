import type { AndSchema, InferAndSchema } from "@assertions/and/types";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if all the assertions pass.
 *
 * If you have two or three assertions consider using {@link and2} or {@link and3} respectively.
 *
 * @param assertions - Array of assertions to be checked.
 *
 * @example
 * ```ts
 * const userEmail = and([string, minLength(5), maxLength(35), email]);
 *
 * userEmail(1); // Error: type
 * userEmail("a"); // Error: minLength
 * userEmail("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@test.com"); // Error: maxLength
 * userEmail("Hello world"); // Error: email
 * userEmail("yamiteru@icloud.com"); // passes
 * ```
 */
export const and =
	<const $Schema extends AndSchema, $Infered = InferAndSchema<$Schema>>(
		assertions: $Schema,
	): Assertion<$Infered> =>
	(v) => {
		for (let i = 0; i < assertions.length; ++i) {
			(assertions[i] as any)(v);
		}
	};
