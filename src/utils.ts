import type { AnyBrand } from "@the-minimal/types";
import type { InferOutput } from "@types";

export function assert<$Brand extends AnyBrand>(
	brand: $Brand,
	value: unknown,
): asserts value is InferOutput<$Brand> {
	(brand as any)(value);
}

export function parse<$Brand extends AnyBrand>(brand: $Brand, value: unknown) {
	(brand as any)(value);

	return value as InferOutput<$Brand>;
}

export function is<$Brand extends AnyBrand>(
	brand: $Brand,
	value: unknown,
): value is InferOutput<$Brand> {
	try {
		(brand as any)(value);

		return true;
	} catch {
		return false;
	}
}
