import type { UnknownAssertion } from "@the-minimal/types";

/**
 * Wraps assertion in a function that will be evaluated only when the assertion is called.
 *
 * @param assertion - Assertion to be lazily evaluated.
 *
 * @example
 * ```ts
 * const user = object({
 *    name; string,
 *    friend: optional(lazy(() => user))
 * });
 *
 * user({
 *    name: "yamiteru",
 *    friend: {
 *        name: "yamiteru",
 *    }
 * }); // passes
 * ```
 */
export const lazy = <$Validation extends UnknownAssertion>(
	assertion: (value: unknown) => $Validation,
) =>
	((value: unknown) => {
		(assertion(value) as any)(value);
	}) as $Validation;
