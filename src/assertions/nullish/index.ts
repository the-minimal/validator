import type {
	Assertion,
	InferAssertion,
	Nullish,
	UnknownAssertion,
} from "@the-minimal/types";

/**
 * Checks if the assertion passes or if the value is null or undefined.
 *
 * @param assertion - Assertion to be checked.
 *
 * @example
 * ```ts
 * const maybeString = nullish(string);
 *
 * maybeString(1); // Error: type
 * maybeString("hello"); // passes
 * maybeString(null); // passes
 * maybeString(undefined); // passes
 * ```
 */
export const nullish =
	<$Assertion extends UnknownAssertion>(
		assertion: $Assertion,
	): Assertion<Nullish<InferAssertion<$Assertion>>> =>
	(v: unknown) =>
		v === null || v === undefined || (assertion as any)(v);
