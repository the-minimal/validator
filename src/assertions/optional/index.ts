import type { AnyBrand } from "@the-minimal/types";
import type { General } from "./types";

/**
 * Checks if the assertion passes or if the value is undefined.
 *
 * @param brand - Assertion to be checked.
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
export const optional = <$Brand extends AnyBrand>(brand: $Brand) =>
	((v: unknown) =>
		v === undefined ||
		(brand as any)(v)) as unknown as General.Optional<$Brand>;
