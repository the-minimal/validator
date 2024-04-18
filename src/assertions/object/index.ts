import { isObject } from "@assertions/isObject";
import type { InferObjectSchema, ObjectSchema } from "@assertions/object/types";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks that assertion passes for each key/value of the object.
 *
 * @param schema - Object schema to be checked.
 *
 * @example
 * ```ts
 * const user = object({
 *    name: string,
 *    age: number,
 * });
 *
 * user(1); // Error: type
 * user(null); // Error: isObject
 * user({
 *    name: 1,
 *    age: "23",
 * }); // Error: type
 * user({
 *    name: "yamiteru",
 *    age: 23,
 * }); // passes
 * ```
 */
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
