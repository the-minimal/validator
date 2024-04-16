import type { Validation } from "@the-minimal/types";
import type { FakeValidation, InferSchema, Schema } from "@types";
import { isObject } from "@validators/isObject";

export const object = <$Schema extends Schema>(schema: $Schema) => {
	const keys = Object.keys(schema);
	const length = keys.length;

	return ((value) => {
		isObject(value);

		for (let i = 0; i < length; ++i) {
			(schema as Record<string, FakeValidation>)[keys[i]](
				(value as any)[keys[i] as any],
			);
		}
	}) as Validation<InferSchema<$Schema>>;
};
