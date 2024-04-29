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
export const lazy = <$Assertion extends UnknownAssertion>(
	assertion: $Assertion,
) =>
	((input: unknown) => {
		(assertion(input) as any)(input);
	}) as $Assertion;
