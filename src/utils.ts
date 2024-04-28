import type { AnyBrand } from "@the-minimal/types";
import type { InferInput } from "@types";

export function assert<$Brand extends AnyBrand>(
	brand: $Brand,
	value: unknown,
): asserts value is InferInput<$Brand> {
	(brand as any)(value);
}
