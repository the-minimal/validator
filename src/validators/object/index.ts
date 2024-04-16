import type { Validation } from "@the-minimal/types";
import type { UnknownValidation } from "@types";
import { isObject } from "@validators/isObject";
import type { InferSchema, Schema } from "@validators/object/types";

export const object = <$Schema extends Schema>(schema: $Schema) => {
	const keys = Object.keys(schema);
	const length = keys.length;

	return ((value) => {
		isObject(value);

		for (let i = 0; i < length; ++i) {
			(schema as Record<string, UnknownValidation>)[keys[i]](
				(value as any)[keys[i] as any],
			);
		}
	}) as Validation<InferSchema<$Schema>>;
};
