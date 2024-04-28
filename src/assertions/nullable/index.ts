import type { AnyBrand } from "@the-minimal/types";
import type { General } from "./types";

/**
 * Checks if the assertion passes or if the value is null.
 *
 * @param brand - Assertion to be checked.
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
export const nullable = <$Brand extends AnyBrand>(brand: $Brand) =>
	((v: unknown) =>
		v === null || (brand as any)(v)) as unknown as General.Nullable<$Brand>;
