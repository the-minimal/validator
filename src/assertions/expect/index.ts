import type { Message } from "@assertions/expect/types";
import { error } from "@error";
import type { AnyBrand } from "@the-minimal/types";

/**
 * Wraps assertion and throws an error with message if assertion fails.
 *
 * @param brand - Assertion to be checked.
 * @param message - Message to be used in error.
 *
 * @example
 * ```ts
 * const stringWithMessage = expect(
 *    string,
 *    (_, v) => `Expected string, got ${typeof v}`
 * );
 * ```
 */
export const expect = <$Brand extends AnyBrand>(
	brand: $Brand,
	message: Message,
) =>
	((v: unknown) => {
		try {
			(brand as any)(v);
		} catch (e: any) {
			error(brand, message(e, v));
		}
	}) as unknown as $Brand;
