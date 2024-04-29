import type {
	Assertion,
	InferAssertion,
	Optional,
	UnknownAssertion,
} from "@the-minimal/types";

/**
 * Checks if the assertion passes or if the value is undefined.
 *
 * @param assertion - Assertion to be checked.
 *
 * @example
 * ```ts
 * const maybeString = optional(string);
 *
 * maybeString(1); // Error: type
 * maybeString("hello"); // passes
 * maybeString(undefined); // passes
 * ```
 */
export const optional =
	<$Assertion extends UnknownAssertion>(
		assertion: $Assertion,
	): Assertion<Optional<InferAssertion<$Assertion>>> =>
	(v: unknown) =>
		v === undefined || (assertion as any)(v);
