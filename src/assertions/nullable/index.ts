import type {
	Assertion,
	InferAssertion,
	Nullable,
	UnknownAssertion,
} from "@the-minimal/types";

/**
 * Checks if the assertion passes or if the value is null.
 *
 * @param assertion - Assertion to be checked.
 *
 * @example
 * ```ts
 * const maybeString = nullable(string);
 *
 * maybeString(1); // Error: type
 * maybeString("hello"); // passes
 * maybeString(null); // passes
 * ```
 */
export const nullable =
	<$Assertion extends UnknownAssertion>(
		assertion: $Assertion,
	): Assertion<Nullable<InferAssertion<$Assertion>>> =>
	(v: unknown) =>
		v === null || (assertion as any)(v);
