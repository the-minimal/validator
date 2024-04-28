import { isArray } from "@assertions/isArray";
import type { AnyBrand } from "@the-minimal/types";
import type { Validate } from "./types";

/**
 * Checks that assertion passes for each element of the array.
 *
 * @param brand - Assertion to be applied to each element of the array.
 *
 * @example
 * ```ts
 * const numbers = array(number);
 *
 * numbers([1, "2", 3]); // Error: type
 * numbers([1, 2, 3]); // passes
 * ```
 */
export const array = <$Brand extends AnyBrand>(brand: $Brand) =>
	((v: unknown) => {
		isArray(v);

		for (let i = 0; i < v.length; ++i) {
			(brand as any)((v as any)[i]);
		}
	}) as unknown as Validate.Array<$Brand>;
