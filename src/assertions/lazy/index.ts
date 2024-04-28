import type { AnyBrand } from "@the-minimal/types";

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
export const lazy = <$Validation extends AnyBrand>(
	assertion: (input: unknown) => $Validation,
) =>
	((input: unknown) => {
		(assertion(input) as any)(input);
	}) as unknown as $Validation;
