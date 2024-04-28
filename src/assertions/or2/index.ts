import type { Validate } from "@assertions/or/types";
import type { AnyBrand } from "@the-minimal/types";

/**
 * Checks if one of two assertions passes.
 *
 * If none of them passes it throws an error.
 *
 * @param brand1 - First assertion to be checked.
 * @param brand2 - Second assertion to be checked.
 *
 * @example
 * ```ts
 * const trueish = or(literal(1), literal(true), literal("true"));
 *
 * trueish("yassss"); // Error: literal
 * trueish(1); // passes
 * trueish(true); // passes
 * trueish("true"); // passes
 * ```
 */
export const or2 = <$Brand1 extends AnyBrand, $Brand2 extends AnyBrand>(
	brand1: $Brand1,
	brand2: $Brand2,
) =>
	((v: unknown) => {
		try {
			(brand1 as any)(v);
		} catch {
			(brand2 as any)(v);
		}
	}) as unknown as Validate.Or<[$Brand1, $Brand2]>;
