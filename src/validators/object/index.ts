import type { Assertion } from "@the-minimal/types";
import { isObject } from "@validators/isObject";
import type { InferObjectSchema, ObjectSchema } from "@validators/object/types";

export const object = <$Schema extends ObjectSchema>(schema: $Schema) => {
	const keys = Object.keys(schema);
	const length = keys.length;

	return ((value) => {
		isObject(value);

		for (let i = 0; i < length; ++i) {
			(schema[keys[i]] as any)((value as any)[keys[i] as any]);
		}
	}) as Assertion<InferObjectSchema<$Schema>>;
};
