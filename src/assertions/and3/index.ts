import type { Validate } from "@assertions/and/types";
import type { AnyBrand } from "@the-minimal/types";

/**
 * Checks that all three assertions pass.
 *
 * @param assertion1- First assertion to be checked.
 * @param assertion2- Second assertion to be checked.
 * @param assertion3- Third assertion to be checked.
 *
 * @example
 * ```ts
 * const userEmail = and(string, minLength(5), email);
 *
 * userEmail(1); // Error: type
 * userEmail("a"); // Error: minLength
 * userEmail("Hello world"); // Error: email
 * userEmail("yamiteru@icloud.com"); // passes
 * ```
 */
export const and3 = <
	$Brand1 extends AnyBrand,
	$Brand2 extends AnyBrand,
	$Brand3 extends AnyBrand,
>(
	brand1: $Brand1,
	brand2: $Brand2,
	brand3: $Brand3,
) =>
	((v: unknown) => {
		(brand1 as any)(v);
		(brand2 as any)(v);
		(brand3 as any)(v);
	}) as unknown as Validate.And<[$Brand1, $Brand2, $Brand3]>;
