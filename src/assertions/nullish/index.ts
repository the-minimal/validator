import type { AnyBrand } from "@the-minimal/types";
import type { Validate } from "./types";

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
export const nullish = <$Brand extends AnyBrand>(brand: $Brand) =>
	((v: unknown) =>
		v === null ||
		v === undefined ||
		(brand as any)(v)) as unknown as Validate.Nullish<$Brand>;
