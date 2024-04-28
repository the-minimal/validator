import type { Validate } from "@assertions/and/types";
import type { AnyBrand } from "@the-minimal/types";

/**
 * Checks that both assertions pass.
 *
 * @param assertion1- First assertion to be checked.
 * @param assertion2- Second assertion to be checked.
 *
 * @example
 * ```ts
 * const userEmail = and(string, email);
 *
 * userEmail(1); // Error: type
 * userEmail("Hello world"); // Error: email
 * userEmail("yamiteru@icloud.com"); // passes
 * ```
 */
export const and2 = <$Brand1 extends AnyBrand, $Brand2 extends AnyBrand>(
	brand1: $Brand1,
	brand2: $Brand2,
) =>
	((v: unknown) => {
		(brand1 as any)(v);
		(brand2 as any)(v);
	}) as unknown as Validate.And<[$Brand1, $Brand2]>;
